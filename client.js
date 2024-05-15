/**
 * connect() function helps users to establish a connection to the snek game server
 * 
 */
const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {

  //connection setup
  const config = {
    host: IP,
    port: PORT,
  };

  //Create connection to server
  const conn = net.createConnection(config);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Send message to server
  conn.on("connect", () => {
    conn.write("Name: LHL");


  })

  conn.on("data", (serverData) => {
    console.log(`Server says: ${serverData}`);
  });
  
  return conn;
};

module.exports = connect;