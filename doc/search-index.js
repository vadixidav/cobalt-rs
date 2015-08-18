var searchIndex = {};
searchIndex['cobalt'] = {"items":[[0,"","cobalt","**cobalt** is a networking library which provides [virtual connections\nover UDP](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)\nalong with a messaging layer for sending both unreliable, reliable as well\nas ordered messages.",null,null],[3,"Config","","Structure defining connection and message configuration options.",null,null],[12,"send_rate","","Number of packets send per second. Default is `30`.",0,null],[12,"packet_max_size","","Maximum bytes that can be received / send in one packet. Default\n`1400`.",0,null],[12,"protocol_header","","32-Bit Protocol ID used to identify UDP related packets. Default is\n`[1, 2, 3, 4]`.",0,null],[12,"packet_drop_threshold","","Maximum roundtrip-time in milliseconds before a packet is considered\nlost. Default is `1000`.",0,null],[12,"connection_init_threshold","","Maximum time in milliseconds until the first packet must be received\nbefore a connection attempt fails. Default is `100`.",0,null],[12,"connection_drop_threshold","","Maximum time in milliseconds between any two packets before the\nconnection gets dropped. Default is `1000`.",0,null],[12,"message_quota_instant","","The percent of available packet bytes to use when serializing\n`MessageKind::Instant` into a packet via a `MessageQueue`.",0,null],[12,"message_quota_reliable","","The percent of available packet bytes to use when serializing\n`MessageKind::Reliable` into a packet via a `MessageQueue`.",0,null],[12,"message_quota_ordered","","The percent of available packet bytes to use when serializing\n`MessageKind::Ordered` into a packet via a `MessageQueue`.",0,null],[3,"Connection","","Implementation of reliable UDP based messaging protocol.",null,null],[3,"ConnectionID","","Representation of a random id for connection identification.",null,null],[3,"BinaryRateLimiter","","Implementation of a binary state rate limiter for congestion avoidance.",null,null],[3,"Client","","Implementation of a single-server client implementation with handler based\nevent dispatching.",null,null],[3,"Server","","Implementation of a multi-client server implementation with handler based\nevent dispatching.",null,null],[4,"ConnectionState","","Enum indicating the state of a connection.",null,null],[13,"Connecting","","The connection has been opened but has yet to receive the first\nincoming packet.",1,null],[13,"Connected","","The remote has responded and at least one incoming packet has been\nreceived.",1,null],[13,"FailedToConnect","","The remote did not respond with the first packet within the maximum\nconfigured time frame for establishing a connection.",1,null],[13,"Lost","","The remote did not send any packets within the maximum configured time\nframe between any two packets.",1,null],[13,"Closed","","The connection has been closed programmatically.",1,null],[4,"MessageKind","","Enum for specification of a message handling algorithm.",null,null],[13,"Instant","","Message that is going be send exactly once and ignored in case its\ncontaining packet is lost. No guarantees are made as for the order in\nwhich a message of this kind is going to be received by a remote queue.",2,null],[13,"Reliable","","Message that is going to be re-send in case its containing packet is\nlost. No guarantees are made as for the order in which a message of\nthis kind is going to be received by a remote queue.",2,null],[13,"Ordered","","Message that is going to be re-send in case its containing packet is\nlost and is also guaranteed to arrive in-order, meaning that if you send\ntwo `Ordered` messages and the second arrives first in the remote queue\n, the remote queue will buffer the second message until the first one\narrives and then make both of them available to the application at\nonce.",2,null],[13,"Invalid","","Invalid message which for some reason could not be parsed correctly\nfrom the available packet data.",2,null],[11,"new","","Creates a new client with the given configuration.",3,{"inputs":[{"name":"client"},{"name":"config"}],"output":{"name":"client"}}],[11,"peer_addr","","Returns the address of the server the client is currently connected to.",3,{"inputs":[{"name":"client"}],"output":{"name":"option"}}],[11,"connect","","Tries to establish connection to the server specified by the address.",3,{"inputs":[{"name":"client"},{"name":"handler"},{"name":"t"}],"output":{"name":"result"}}],[11,"close","","Closes the clients connections to the server.",3,{"inputs":[{"name":"client"}],"output":null}],[11,"new","","Creates a new server with the given configuration.",4,{"inputs":[{"name":"server"},{"name":"config"}],"output":{"name":"server"}}],[11,"local_addr","","Returns the local address the server is currently bound to.",4,{"inputs":[{"name":"server"}],"output":{"name":"option"}}],[11,"bind","","Tries to bind the server to the specified local address and actively\nlistens for and manages incoming client connections.",4,{"inputs":[{"name":"server"},{"name":"handler"},{"name":"t"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the server, closing all active connections.",4,{"inputs":[{"name":"server"}],"output":null}],[11,"new","","Creates a new rate limiter.",5,{"inputs":[{"name":"binaryratelimiter"},{"name":"config"}],"output":{"name":"box"}}],[11,"update","","",5,{"inputs":[{"name":"binaryratelimiter"},{"name":"u32"},{"name":"f32"}],"output":null}],[11,"congested","","",5,{"inputs":[{"name":"binaryratelimiter"}],"output":{"name":"bool"}}],[11,"should_send","","",5,{"inputs":[{"name":"binaryratelimiter"}],"output":{"name":"bool"}}],[11,"reset","","",5,{"inputs":[{"name":"binaryratelimiter"}],"output":null}],[11,"clone","","",0,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"default","","",0,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"clone","","",1,{"inputs":[{"name":"connectionstate"}],"output":{"name":"connectionstate"}}],[11,"eq","","",1,{"inputs":[{"name":"connectionstate"},{"name":"connectionstate"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"connectionstate"},{"name":"connectionstate"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"connectionid"}],"output":{"name":"connectionid"}}],[11,"hash","","",6,null],[11,"eq","","",6,{"inputs":[{"name":"connectionid"},{"name":"connectionid"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"connectionid"},{"name":"connectionid"}],"output":{"name":"bool"}}],[11,"new","","Creates a new Virtual Connection over the given `SocketAddr`.",7,{"inputs":[{"name":"connection"},{"name":"config"},{"name":"socketaddr"},{"name":"box"}],"output":{"name":"connection"}}],[11,"id_from_packet","","Extracts a `ConnectionID` from packet with a valid protocol header.",7,null],[11,"open","","Returns whether the connection is currently accepting any incoming\npackets.",7,{"inputs":[{"name":"connection"}],"output":{"name":"bool"}}],[11,"congested","","Returns whether the connection is currently congested and should be\nsending less packets per second in order to resolve the congestion.",7,{"inputs":[{"name":"connection"}],"output":{"name":"bool"}}],[11,"id","","Returns the id of the connection.",7,{"inputs":[{"name":"connection"}],"output":{"name":"connectionid"}}],[11,"state","","Returns the current state of the connection.",7,{"inputs":[{"name":"connection"}],"output":{"name":"connectionstate"}}],[11,"rtt","","Returns the average roundtrip time for the connection.",7,{"inputs":[{"name":"connection"}],"output":{"name":"u32"}}],[11,"packet_loss","","Returns the percent of packets that were sent and never acknowledged\nover the total number of packets that have been send across the\nconnection.",7,{"inputs":[{"name":"connection"}],"output":{"name":"f32"}}],[11,"peer_addr","","Returns the socket address of the remote peer of this connection.",7,{"inputs":[{"name":"connection"}],"output":{"name":"socketaddr"}}],[11,"set_peer_addr","","Sets the socket address of the remote peer of this connection.",7,{"inputs":[{"name":"connection"},{"name":"socketaddr"}],"output":null}],[11,"send","","Sends a message of the specified `kind` along with its `payload` over\nthe connection.",7,{"inputs":[{"name":"connection"},{"name":"messagekind"},{"name":"vec"}],"output":null}],[11,"received","","Returns a consuming iterator over all messages received over this\nconnections.",7,{"inputs":[{"name":"connection"}],"output":{"name":"messageiterator"}}],[11,"receive_packet","","Receives a incoming UDP packet.",7,{"inputs":[{"name":"connection"},{"name":"vec"},{"name":"t"},{"name":"handler"}],"output":null}],[11,"send_packet","","Creates a new outgoing UDP packet.",7,{"inputs":[{"name":"connection"},{"name":"s"},{"name":"socketaddr"},{"name":"t"},{"name":"handler"}],"output":null}],[11,"reset","","Resets the connection for re-use with another address.",7,{"inputs":[{"name":"connection"}],"output":null}],[11,"close","","Closes the connection, no further packets will be received or send.",7,{"inputs":[{"name":"connection"}],"output":null}],[11,"eq","","",2,{"inputs":[{"name":"messagekind"},{"name":"messagekind"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"messagekind"},{"name":"messagekind"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"messagekind"}],"output":{"name":"messagekind"}}],[8,"Handler","","Trait for implementation a proxy which receives client and server events.",null,null],[11,"rate_limiter","","Method that returns a new `RateLimiter` instance for use with a\nfreshly instantiated `Connection`.",8,{"inputs":[{"name":"handler"},{"name":"config"}],"output":{"name":"box"}}],[11,"bind","","Method that is called once a `Server` has successfully bound itself\nto its local address.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connections","","Method that is called each time a `Server` \"ticks\". A \"tick\" occurs\nin-between the receiving and sending data from / to connections.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"hashmap"}],"output":null}],[11,"shutdown","","Method that is called once a `Server` is going to shutdown.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connect","","Method that is called once a `Client` has successfully bound itself\nto its local address.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connection","","Method that is called each time a `Client` \"ticks\". A \"tick\" occurs\nin-between the receiving and sending data from / to connections.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"close","","Method that is called once a `Client` is going to close.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connection","","Method that is called each time a new connection is established.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_failed","","Method that is called each time a connection fails to establish.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_packet_lost","","Method that is called each time a packet send by a connection is lost.",8,null],[11,"connection_congestion_state","","Method that is called each time the congestion state of connection\nchanges.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"},{"name":"bool"}],"output":null}],[11,"connection_lost","","Method that is called each time a connection is lost and dropped.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[8,"RateLimiter","","Trait for implementation network congestion avoidance algorithms.",null,null],[10,"update","","Method implementing a congestion avoidance algorithm based on round\ntrip time and packet loss.",9,{"inputs":[{"name":"ratelimiter"},{"name":"u32"},{"name":"f32"}],"output":null}],[10,"congested","","Method that should return `true` in case the connection is currently\nconsidered congested and should reduce the number of packets it sends\nper second.",9,{"inputs":[{"name":"ratelimiter"}],"output":{"name":"bool"}}],[10,"should_send","","Method that returns whether a connection should be currently sending\npackets or not.",9,{"inputs":[{"name":"ratelimiter"}],"output":{"name":"bool"}}],[10,"reset","","Method that resets any internal state of the rate limiter.",9,{"inputs":[{"name":"ratelimiter"}],"output":null}],[11,"rate_limiter","","Method that returns a new `RateLimiter` instance for use with a\nfreshly instantiated `Connection`.",8,{"inputs":[{"name":"handler"},{"name":"config"}],"output":{"name":"box"}}],[11,"bind","","Method that is called once a `Server` has successfully bound itself\nto its local address.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connections","","Method that is called each time a `Server` \"ticks\". A \"tick\" occurs\nin-between the receiving and sending data from / to connections.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"hashmap"}],"output":null}],[11,"shutdown","","Method that is called once a `Server` is going to shutdown.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connect","","Method that is called once a `Client` has successfully bound itself\nto its local address.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"tick_connection","","Method that is called each time a `Client` \"ticks\". A \"tick\" occurs\nin-between the receiving and sending data from / to connections.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"close","","Method that is called once a `Client` is going to close.",8,{"inputs":[{"name":"handler"},{"name":"t"}],"output":null}],[11,"connection","","Method that is called each time a new connection is established.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_failed","","Method that is called each time a connection fails to establish.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}],[11,"connection_packet_lost","","Method that is called each time a packet send by a connection is lost.",8,null],[11,"connection_congestion_state","","Method that is called each time the congestion state of connection\nchanges.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"},{"name":"bool"}],"output":null}],[11,"connection_lost","","Method that is called each time a connection is lost and dropped.",8,{"inputs":[{"name":"handler"},{"name":"t"},{"name":"connection"}],"output":null}]],"paths":[[3,"Config"],[4,"ConnectionState"],[4,"MessageKind"],[3,"Client"],[3,"Server"],[3,"BinaryRateLimiter"],[3,"ConnectionID"],[3,"Connection"],[8,"Handler"],[8,"RateLimiter"]]};
initSearch(searchIndex);
