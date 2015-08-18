use std::thread;
use std::io::Error;
use std::net::{SocketAddr, ToSocketAddrs};
use std::collections::HashMap;
use traits::socket::Socket;
use shared::udp_socket::UdpSocket;
use super::{Config, Connection, ConnectionID, Handler};

/// Implementation of a multi-client server implementation with handler based
/// event dispatching.
pub struct Server {
    closed: bool,
    config: Config,
    address: Option<SocketAddr>
}

impl Server {

    /// Creates a new server with the given configuration.
    pub fn new(config: Config) -> Server {
        Server {
            closed: false,
            config: config,
            address: None
        }
    }

    /// Returns the local address the server is currently bound to.
    pub fn local_addr(&self) -> Option<SocketAddr> {
        self.address
    }

    /// Tries to bind the server to the specified local address and actively
    /// listens for and manages incoming client connections.
    ///
    /// The clients must use a compatible configuration in order for
    /// connections to be actually established.
    ///
    /// The `handler` is a struct that implements the `Handler` trait in order
    /// to handle events from the server and its connections.
    pub fn bind<T: ToSocketAddrs>(
        &mut self, handler: &mut Handler<Server>, address: T
    ) -> Result<(), Error> {

        // Create the UDP socket
        let mut socket = try!(UdpSocket::new(
            address,
            self.config.packet_max_size
        ));

        self.address = Some(try!(socket.local_addr()));

        // Extract packet reader
        let reader = socket.reader().unwrap();

        // Create connection management collections
        let mut dropped: Vec<ConnectionID> = Vec::new();
        let mut addresses: HashMap<ConnectionID, SocketAddr> = HashMap::new();
        let mut connections: HashMap<ConnectionID, Connection> = HashMap::new();

        // Invoke handler
        handler.bind(self);

        // Receive and send until we shut down.
        while !self.closed {

            // Receive all incoming UDP packets to our local address
            while let Ok((addr, packet)) = reader.try_recv() {

                // Try to extract the connection id from the packet
                match Connection::id_from_packet(&self.config, &packet) {
                    Some(id) => {

                        if !connections.contains_key(&id) {

                            // In case of a unknown ConnectionID we create a
                            // new connection and map it to the id
                            let conn = Connection::new(
                                self.config,
                                addr,
                                handler.rate_limiter(&self.config)
                            );

                            connections.insert(id, conn);

                            // We also map the initial peer address to the id.
                            // this is done in order to reliable track the
                            // connection in case of address re-assignments by
                            // network address translation.
                            addresses.insert(id, addr);

                        }

                        // Check for changes in the peer address and update
                        // the address to ID mapping
                        let connection = connections.get_mut(&id).unwrap();
                        if addr != connection.peer_addr() {
                            connection.set_peer_addr(addr);
                            addresses.remove(&id).unwrap();
                            addresses.insert(id, addr);
                        }

                        // Then feed the packet into the connection object for
                        // parsing
                        connection.receive_packet(packet, self, handler);

                    },
                    None => { /* Ignore any invalid packets */ }
                }

            }

            // Invoke handler
            handler.tick_connections(self, &mut connections);

            // Create outgoing packets for all connections
            for (id, conn) in connections.iter_mut() {

                // Resolve the last known remote address for this
                // connection and send the data
                let addr = addresses.get(id).unwrap();

                // Then invoke the connection to send a outgoing packet
                conn.send_packet(&mut socket, addr, self, handler);

                // Collect all lost / closed connections
                if conn.open() == false {
                    dropped.push(*id);
                }

            }

            // Remove any dropped connections and their address mappings
            if dropped.is_empty() == false {

                for id in dropped.iter() {
                    connections.remove(id).unwrap().reset();
                    addresses.remove(id).unwrap();
                }

                dropped.clear();

            }

            // Next Tick
            thread::sleep_ms(1000 / self.config.send_rate);

        }

        // Invoke handler
        handler.shutdown(self);
        self.address = None;

        // Reset all connection states
        for (_, conn) in connections.iter_mut() {
            conn.reset();
        }

        // Close the UDP socket
        socket.shutdown();

        Ok(())

    }

    /// Shuts down the server, closing all active connections.
    pub fn shutdown(&mut self) {
        self.closed = true;
    }

}
