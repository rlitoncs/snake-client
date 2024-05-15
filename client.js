const net = require("net");

// establishes a connection with the game server
const connect = function() {

  //connection setup
  const config = {
    host: 'localhost',
    port: 50541,
  };

  //Create connection to server
  const conn = net.createConnection(config);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (serverData) => {
    console.log(`Server says: ${serverData}`);
  });
  
  return conn;
};

console.log("Connecting ...");

module.exports = connect;