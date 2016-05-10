var searchIndex = {};
searchIndex["cobalt"] = {"doc":"**cobalt** is a networking library which provides [virtual connections\nover UDP](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)\nfor both unreliable, reliable and optional in-order delivery of messages.","items":[[3,"Config","cobalt","Structure defining connection and message configuration options.",null,null],[12,"send_rate","","Number of packets send per second. Default is `30`.",0,null],[12,"packet_max_size","","Maximum bytes that can be received / send in one packet. Default\n`1400`.",0,null],[12,"protocol_header","","32-Bit Protocol ID used to identify UDP related packets. Default is\n`[1, 2, 3, 4]`.",0,null],[12,"packet_drop_threshold","","Maximum roundtrip-time in milliseconds before a packet is considered\nlost. Default is `1000`.",0,null],[12,"connection_init_threshold","","Maximum time in milliseconds until the first packet must be received\nbefore a connection attempt fails. Default is `100`.",0,null],[12,"connection_drop_threshold","","Maximum time in milliseconds between any two packets before the\nconnection gets dropped. Default is `1000`.",0,null],[12,"message_quota_instant","","The percent of available packet bytes to use when serializing\n`MessageKind::Instant` into a packet via a `MessageQueue`.",0,null],[12,"message_quota_reliable","","The percent of available packet bytes to use when serializing\n`MessageKind::Reliable` into a packet via a `MessageQueue`.",0,null],[12,"message_quota_ordered","","The percent of available packet bytes to use when serializing\n`MessageKind::Ordered` into a packet via a `MessageQueue`.",0,null],[3,"Connection","","Implementation of a reliable, virtual connection logic.",null,null],[3,"ConnectionID","","Representation of a random ID for connection identification purposes.",null,null],[3,"BinaryRateLimiter","","Implementation of a binary state rate limiter for congestion avoidance.",null,null],[3,"UdpSocket","","Non-blocking abstraction over a UDP socket.",null,null],[3,"Stats","","A structure containing stats data average of the course of one second.",null,null],[12,"bytes_sent","","Average number of bytes received over the last second.",1,null],[12,"bytes_received","","Average number of bytes received over the last second.",1,null],[3,"Client","","Implementation of a single-server client with handler based event dispatch.",null,null],[3,"ClientState","","A structure used for synchronous calls on a `Client` instance.",null,null],[3,"ClientStream","","Implementation of a stream based `Client` interface suitable for event\npolling.",null,null],[3,"Server","","Implementation of a multi-client server with handler based event dispatch.",null,null],[4,"ConnectionState","","Enum indicating the state of a connection.",null,null],[13,"Connecting","","The connection has been opened but has yet to receive the first\nincoming packet.",2,null],[13,"Connected","","The remote has responded and at least one incoming packet has been\nreceived.",2,null],[13,"FailedToConnect","","The remote did not respond with the first packet within the maximum\nconfigured time frame for establishing a connection.",2,null],[13,"Lost","","The remote did not send any packets within the maximum configured time\nframe between any two packets.",2,null],[13,"Closing","","The connection is about to be closed.",2,null],[13,"Closed","","The connection has been closed programmatically.",2,null],[4,"MessageKind","","Enum for specification of a message handling algorithm.",null,null],[13,"Instant","","Message that is going be send exactly once and ignored in case its\ncontaining packet is lost. No guarantees are made as for the order in\nwhich a message of this kind is going to be received by a remote queue.",3,null],[13,"Reliable","","Message that is going to be re-send in case its containing packet is\nlost. No guarantees are made as for the order in which a message of\nthis kind is going to be received by a remote queue.",3,null],[13,"Ordered","","Message that is going to be re-send in case its containing packet is\nlost and is also guaranteed to arrive in-order, meaning that if you send\ntwo `Ordered` messages and the second arrives first in the remote queue\n, the remote queue will buffer the second message until the first one\narrives and then make both of them available to the application at\nonce.",3,null],[13,"Invalid","","Invalid message which for some reason could not be parsed correctly\nfrom the available packet data.",3,null],[4,"ClientEvent","","Enum of stream related network events.",null,null],[13,"Connect","","Event emitted when a initial connection attempt to a server is made.",4,null],[13,"Tick","","Event emitted each time the stream&#39;s underlying handler&#39;s `tick` method\nwould have been invoked.",4,null],[13,"Close","","Event emitted once the connection to the server has been closed by the\nstream&#39;s `close` method.",4,null],[13,"Connection","","Event emitted once a connection to the server has been established.",4,null],[13,"ConnectionFailed","","Event emitted when a initial connection attempt to a server failed.",4,null],[13,"ConnectionLost","","Event emitted when a existing connection to a server is lost.",4,null],[13,"ConnectionClosed","","Event emitted when a connection is closed programmatically.",4,null],[13,"Message","","Event emitted for each message received from the server.",4,null],[13,"ConnectionCongestionState","","Event emitted each time the stream&#39;s congestion state changes.",4,null],[13,"PacketLost","","Event emitted each time a packet is lost.",4,null],[11,"fmt","","",5,{"inputs":[{"name":"client"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new client with the given configuration.",5,{"inputs":[{"name":"config"}],"output":{"name":"client"}}],[11,"peer_addr","","Returns the address of the server the client is currently connected to.",5,{"inputs":[{"name":"client"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the local address that the client is sending from.",5,{"inputs":[{"name":"client"}],"output":{"name":"result"}}],[11,"stats","","Returns statistics (i.e. bandwidth usage) for the last second.",5,{"inputs":[{"name":"client"}],"output":{"name":"stats"}}],[11,"config","","Returns a copy of the client&#39;s current configuration.",5,{"inputs":[{"name":"client"}],"output":{"name":"config"}}],[11,"set_config","","Overrides the client&#39;s existing configuration.",5,{"inputs":[{"name":"client"},{"name":"config"},{"name":"clientstate"}],"output":null}],[11,"connect","","Establishes a connection with the server at the specified address by\ncreating a local socket for message sending.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"a"}],"output":{"name":"result"}}],[11,"connect_from_socket","","Establishes a connection with the server at the specified address by\nusing the specified socket for message sending.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"a"},{"name":"s"}],"output":{"name":"result"}}],[11,"close","","Asynchronously closes the connection to the server.",5,{"inputs":[{"name":"client"}],"output":{"name":"result"}}],[11,"connect_sync","","Establishes a connection with the server at the specified address by\ncreating a local socket for message sending.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"a"}],"output":{"name":"result"}}],[11,"connect_from_socket_sync","","Establishes a connection with the server at the specified address by\nusing the specified socket for message sending.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"a"},{"name":"s"}],"output":{"name":"result"}}],[11,"receive_sync","","Receives all currently buffered incoming packet from the underlying\nconnection.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"clientstate"},{"name":"u32"}],"output":null}],[11,"tick_sync","","Performs exactly on tick of the underlying connection.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"clientstate"}],"output":null}],[11,"send_sync","","Sends exactly on outgoing packet from the underlying connection.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"clientstate"}],"output":null}],[11,"close_sync","","Closes the connection to the server.",5,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"clientstate"}],"output":{"name":"result"}}],[11,"into_stream","","Consumes the `Client` instance converting it into a `ClientStream`.",5,{"inputs":[{"name":"client"}],"output":{"name":"clientstream"}}],[11,"fmt","","",6,{"inputs":[{"name":"clientstate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"rtt","","Returns the average roundtrip time for this client&#39;s underlying\nconnection.",6,{"inputs":[{"name":"clientstate"}],"output":{"name":"u32"}}],[11,"packet_loss","","Returns the percent of packets that were sent and never acknowledged\nover the total number of packets that have been send across this\nclient&#39;s underlying connection.",6,{"inputs":[{"name":"clientstate"}],"output":{"name":"f32"}}],[11,"stats","","Returns statistics (i.e. bandwidth usage) for the last second, of this\nclient&#39;s underlying connection.",6,{"inputs":[{"name":"clientstate"}],"output":{"name":"stats"}}],[11,"local_addr","","Returns the socket address for the local end of this client&#39;s\nunderlying connection.",6,{"inputs":[{"name":"clientstate"}],"output":{"name":"socketaddr"}}],[11,"peer_addr","","Returns the socket address for the remote end of this client&#39;s\nunderlying connection.",6,{"inputs":[{"name":"clientstate"}],"output":{"name":"socketaddr"}}],[11,"set_config","","Overrides the configuration of this client&#39;s underlying connection.",6,{"inputs":[{"name":"clientstate"},{"name":"config"}],"output":null}],[11,"send","","Sends a message of the specified `kind` along with its `payload` over\nthis client&#39;s underlying connection.",6,{"inputs":[{"name":"clientstate"},{"name":"messagekind"},{"name":"vec"}],"output":null}],[11,"reset","","Resets this client&#39;s underlying connection state.",6,{"inputs":[{"name":"clientstate"}],"output":null}],[11,"eq","","",4,{"inputs":[{"name":"clientevent"},{"name":"clientevent"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"clientevent"},{"name":"clientevent"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"clientevent"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"clientstream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new client stream with the given configuration.",7,{"inputs":[{"name":"config"}],"output":{"name":"clientstream"}}],[11,"from_client","","Consumes the passed in `Client` instance converting it into a\n`ClientStream`.",7,{"inputs":[{"name":"client"}],"output":{"name":"clientstream"}}],[11,"peer_addr","","Returns the address of the server the stream is currently connected to.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the local address that the stream is sending from.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"result"}}],[11,"rtt","","Returns the average roundtrip time for this stream&#39;s underlying\nconnection.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"u32"}}],[11,"packet_loss","","Returns the percent of packets that were sent and never acknowledged\nover the total number of packets that have been send across this\nstream.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"f32"}}],[11,"stats","","Returns statistics (i.e. bandwidth usage) for the last second.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"stats"}}],[11,"bytes_sent","","Returns the number of bytes sent over the last second.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"u32"}}],[11,"bytes_received","","Returns the number of bytes received over the last second.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"u32"}}],[11,"config","","Returns a copy of the stream&#39;s current configuration.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"config"}}],[11,"set_config","","Overrides the stream&#39;s current configuration with the one provided.",7,{"inputs":[{"name":"clientstream"},{"name":"config"}],"output":null}],[11,"connect","","Establishes a connection with the server at the specified address.",7,{"inputs":[{"name":"clientstream"},{"name":"a"}],"output":{"name":"result"}}],[11,"receive","","Receives the next incoming message from the stream&#39;s underlying\nconnection.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"result"}}],[11,"send","","Queues a message of the specified `kind` along with its `payload` to\nbe send with the next `flush` call.",7,{"inputs":[{"name":"clientstream"},{"name":"messagekind"},{"name":"vec"}],"output":{"name":"result"}}],[11,"flush","","Sends all queued messages over the stream&#39;s underlying connection.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"result"}}],[11,"reset","","Resets the stream&#39;s underlying connection to the server.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"result"}}],[11,"close","","Closes the stream&#39;s underlying connection to the server.",7,{"inputs":[{"name":"clientstream"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"server"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new server with the given configuration.",8,{"inputs":[{"name":"config"}],"output":{"name":"server"}}],[11,"local_addr","","Returns the local address that the server is bound to.",8,{"inputs":[{"name":"server"}],"output":{"name":"result"}}],[11,"stats","","Returns statistics (i.e. bandwidth usage) for the last second.",8,{"inputs":[{"name":"server"}],"output":{"name":"stats"}}],[11,"bind","","Binds the server to the specified local address by creating a socket\nand actively listens for incoming client connections.",8,{"inputs":[{"name":"server"},{"name":"handler"},{"name":"a"}],"output":{"name":"result"}}],[11,"bind_to_socket","","Binds the server to specified socket and actively listens for incoming\nclient connections.",8,{"inputs":[{"name":"server"},{"name":"handler"},{"name":"s"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the server, closing all active client connections.",8,{"inputs":[{"name":"server"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"binaryratelimiter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new rate limiter.",9,{"inputs":[{"name":"config"}],"output":{"name":"box"}}],[11,"update","","",9,{"inputs":[{"name":"binaryratelimiter"},{"name":"u32"},{"name":"f32"}],"output":null}],[11,"congested","","",9,{"inputs":[{"name":"binaryratelimiter"}],"output":{"name":"bool"}}],[11,"should_send","","",9,{"inputs":[{"name":"binaryratelimiter"}],"output":{"name":"bool"}}],[11,"reset","","",9,{"inputs":[{"name":"binaryratelimiter"}],"output":null}],[11,"eq","","",0,{"inputs":[{"name":"config"},{"name":"config"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"config"},{"name":"config"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"config"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"config"}}],[11,"eq","","",2,{"inputs":[{"name":"connectionstate"},{"name":"connectionstate"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"connectionstate"},{"name":"connectionstate"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"connectionstate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"connectionstate"}],"output":{"name":"connectionstate"}}],[11,"clone","","",10,{"inputs":[{"name":"connectionid"}],"output":{"name":"connectionid"}}],[11,"hash","","",10,null],[11,"eq","","",10,{"inputs":[{"name":"connectionid"},{"name":"connectionid"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"connectionid"},{"name":"connectionid"}],"output":{"name":"bool"}}],[11,"fmt","","",10,{"inputs":[{"name":"connectionid"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"connection"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new Virtual Connection over the given `SocketAddr`.",11,{"inputs":[{"name":"config"},{"name":"socketaddr"},{"name":"socketaddr"},{"name":"box"}],"output":{"name":"connection"}}],[11,"id_from_packet","","Extracts a `ConnectionID` from packet with a valid protocol header.",11,null],[11,"open","","Returns whether the connection is currently accepting any incoming\npackets.",11,{"inputs":[{"name":"connection"}],"output":{"name":"bool"}}],[11,"congested","","Returns whether the connection is currently congested and should be\nsending less packets per second in order to resolve the congestion.",11,{"inputs":[{"name":"connection"}],"output":{"name":"bool"}}],[11,"id","","Returns the id of the connection.",11,{"inputs":[{"name":"connection"}],"output":{"name":"connectionid"}}],[11,"set_id","","Overrides the id of the connection.",11,{"inputs":[{"name":"connection"},{"name":"connectionid"}],"output":null}],[11,"state","","Returns the current state of the connection.",11,{"inputs":[{"name":"connection"}],"output":{"name":"connectionstate"}}],[11,"rtt","","Returns the average roundtrip time for the connection.",11,{"inputs":[{"name":"connection"}],"output":{"name":"u32"}}],[11,"packet_loss","","Returns the percent of packets that were sent and never acknowledged\nover the total number of packets that have been send across the\nconnection.",11,{"inputs":[{"name":"connection"}],"output":{"name":"f32"}}],[11,"local_addr","","Returns the socket address for the local end of this connection.",11,{"inputs":[{"name":"connection"}],"output":{"name":"socketaddr"}}],[11,"peer_addr","","Returns the socket address for the remote end of this connection.",11,{"inputs":[{"name":"connection"}],"output":{"name":"socketaddr"}}],[11,"set_peer_addr","","Sets the socket address of the remote peer of this connection.",11,{"inputs":[{"name":"connection"},{"name":"socketaddr"}],"output":null}],[11,"set_config","","Overrides the connection&#39;s existing configuration.",11,{"inputs":[{"name":"connection"},{"name":"config"}],"output":null}],[11,"send","","Sends a message of the specified `kind` along with its `payload` over\nthe connection.",11,{"inputs":[{"name":"connection"},{"name":"messagekind"},{"name":"vec"}],"output":null}],[11,"received","","Returns a consuming iterator over all messages received over this\nconnections.",11,{"inputs":[{"name":"connection"}],"output":{"name":"messageiterator"}}],[11,"receive_packet","","Receives a incoming UDP packet.",11,{"inputs":[{"name":"connection"},{"name":"vec"},{"name":"u32"},{"name":"o"},{"name":"handler"}],"output":null}],[11,"send_packet","","Send a new outgoing UDP packet.",11,{"inputs":[{"name":"connection"},{"name":"s"},{"name":"socketaddr"},{"name":"o"},{"name":"handler"}],"output":{"name":"u32"}}],[11,"reset","","Resets the connection for re-use with another address.",11,{"inputs":[{"name":"connection"}],"output":null}],[11,"close","","Closes the connection, no further packets will be received or send.",11,{"inputs":[{"name":"connection"}],"output":null}],[11,"eq","","",3,{"inputs":[{"name":"messagekind"},{"name":"messagekind"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"messagekind"},{"name":"messagekind"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"messagekind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"messagekind"}],"output":{"name":"messagekind"}}],[11,"new","","Tries to create a new UDP socket by binding to the specified address.",12,{"inputs":[{"name":"t"},{"name":"usize"}],"output":{"name":"result"}}],[11,"try_recv","","Attempts to return a incoming packet on this socket without blocking.",12,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"send_to","","Send data on the socket to the given address. On success, returns the\nnumber of bytes written.",12,null],[11,"local_addr","","Returns the socket address of the underlying `net::UdpSocket`.",12,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the socket by stopping its internal reader thread.",12,{"inputs":[{"name":"udpsocket"}],"output":null}],[11,"drop","","",12,{"inputs":[{"name":"udpsocket"}],"output":null}],[11,"fmt","","",12,{"inputs":[{"name":"udpsocket"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"stats"}],"output":{"name":"stats"}}],[11,"eq","","",1,{"inputs":[{"name":"stats"},{"name":"stats"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"stats"},{"name":"stats"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"stats"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"stats"}}],[6,"ConnectionMap","","Type alias for connection mappings.",null,null],[8,"Handler","","Trait for implementation of a client / server event proxy.",null,null],[11,"rate_limiter","","Method that returns a new `RateLimiter` instance for use with a\nfreshly instantiated `Connection`.",13,{"inputs":[{"name":"handler"},{"name":"config"}],"output":{"name":"box"}}],[11,"bind","","Method that is called once a `Server` has successfully bound itself\nto its local address.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connections","","Method that is called each time a `Server` &quot;ticks&quot;. A &quot;tick&quot; occurs\nin-between the receiving and sending data from / to connections.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"hashmap"}],"output":null}],[11,"shutdown","","Method that is called once a `Server` is going to shutdown.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connect","","Method that is called once a `Client` has successfully bound itself\nto its local address.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connection","","Method that is called each time a `Client` &quot;ticks&quot;. A &quot;tick&quot; occurs\nin-between the receiving and sending data from / to connections.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"close","","Method that is called once a `Client` is going to close.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connection","","Method that is called each time a new connection is established.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_failed","","Method that is called each time a connection fails to establish.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_congestion_state","","Method that is called each time the congestion state of connection\nchanges.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"},{"name":"bool"}],"output":null}],[11,"connection_lost","","Method that is called each time a connection is lost and dropped.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_closed","","Method that is called each time a connection is programmatically closed.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"},{"name":"bool"}],"output":null}],[11,"connection_packet_lost","","Method that is called each time a packet send by a connection is lost.",13,null],[11,"connection_packet_compress","","Method that is called for compression purposes before a packet is send\nover the connection&#39;s underlying socket.",13,null],[11,"connection_packet_decompress","","Method that is called for decompression purposes after a packet is\nreceived over the connection&#39;s underlying socket.",13,null],[8,"RateLimiter","","Trait for implementation of a network congestion avoidance algorithm.",null,null],[10,"update","","Method implementing a congestion avoidance algorithm based on round\ntrip time and packet loss.",14,{"inputs":[{"name":"ratelimiter"},{"name":"u32"},{"name":"f32"}],"output":null}],[10,"congested","","Method that should return `true` in case the connection is currently\nconsidered congested and should reduce the number of packets it sends\nper second.",14,{"inputs":[{"name":"ratelimiter"}],"output":{"name":"bool"}}],[10,"should_send","","Method that returns whether a connection should be currently sending\npackets or not.",14,{"inputs":[{"name":"ratelimiter"}],"output":{"name":"bool"}}],[10,"reset","","Method that resets any internal state of the rate limiter.",14,{"inputs":[{"name":"ratelimiter"}],"output":null}],[8,"Socket","","Trait for implementation of a non-blocking UDP socket.",null,null],[10,"try_recv","","Method that attempts to return a incoming packet on this socket without\nblocking.",15,{"inputs":[{"name":"socket"}],"output":{"name":"result"}}],[10,"send_to","","Method sending data on the socket to the given address. On success,\nreturns the number of bytes written.",15,null],[10,"local_addr","","Method returning the address of the actual, underlying socket.",15,{"inputs":[{"name":"socket"}],"output":{"name":"result"}}],[10,"shutdown","","Method for shutting down the socket.",15,{"inputs":[{"name":"socket"}],"output":null}],[11,"rate_limiter","","Method that returns a new `RateLimiter` instance for use with a\nfreshly instantiated `Connection`.",13,{"inputs":[{"name":"handler"},{"name":"config"}],"output":{"name":"box"}}],[11,"bind","","Method that is called once a `Server` has successfully bound itself\nto its local address.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connections","","Method that is called each time a `Server` &quot;ticks&quot;. A &quot;tick&quot; occurs\nin-between the receiving and sending data from / to connections.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"hashmap"}],"output":null}],[11,"shutdown","","Method that is called once a `Server` is going to shutdown.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connect","","Method that is called once a `Client` has successfully bound itself\nto its local address.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connection","","Method that is called each time a `Client` &quot;ticks&quot;. A &quot;tick&quot; occurs\nin-between the receiving and sending data from / to connections.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"close","","Method that is called once a `Client` is going to close.",13,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connection","","Method that is called each time a new connection is established.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_failed","","Method that is called each time a connection fails to establish.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_congestion_state","","Method that is called each time the congestion state of connection\nchanges.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"},{"name":"bool"}],"output":null}],[11,"connection_lost","","Method that is called each time a connection is lost and dropped.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_closed","","Method that is called each time a connection is programmatically closed.",13,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"},{"name":"bool"}],"output":null}],[11,"connection_packet_lost","","Method that is called each time a packet send by a connection is lost.",13,null],[11,"connection_packet_compress","","Method that is called for compression purposes before a packet is send\nover the connection&#39;s underlying socket.",13,null],[11,"connection_packet_decompress","","Method that is called for decompression purposes after a packet is\nreceived over the connection&#39;s underlying socket.",13,null],[11,"fmt","","",14,{"inputs":[{"name":"ratelimiter"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Config"],[3,"Stats"],[4,"ConnectionState"],[4,"MessageKind"],[4,"ClientEvent"],[3,"Client"],[3,"ClientState"],[3,"ClientStream"],[3,"Server"],[3,"BinaryRateLimiter"],[3,"ConnectionID"],[3,"Connection"],[3,"UdpSocket"],[8,"Handler"],[8,"RateLimiter"],[8,"Socket"]]};
initSearch(searchIndex);
