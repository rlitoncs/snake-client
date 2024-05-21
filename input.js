/**
 * setupInput(conn) function handles data events on standard input when a User presses a key 
 * @param {Object} conn - the established connection between client and server
 * @returns {Object} - returns the stdin object if needed to use somewhere else 
 *
 * handleUserInput(key) functions handles the keys that are pressed from user and relays them to the server
 * @param {String} key - the key pressed from user
 *
 */

const { keyMovements, userMessages } = require('./constants'); 

// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin; 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;   
};

const handleUserInput = (key) => {
  if(keyMovements[key]){
    connection.write(keyMovements[key]);
  }

  //Terminate Process
  if (key === '\u0003'){
    process.exit();
  }

};

module.exports = setupInput;