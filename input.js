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

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input

  stdin.on("data", handleUserInput);

  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = (key) => {
  switch (key) {

    //Move commands
    case 'w':
      connection.write(keyMovements.MOVE_UP_KEY);
      break;
    case 'a':
      connection.write(keyMovements.MOVE_LEFT_KEY);
      break;
    case 's':
      connection.write(keyMovements.MOVE_DOWN_KEY);
      break;
    case 'd':
      connection.write(keyMovements.MOVE_RIGHT_KEY);
      break;

    //User Messages
    case 'h':
      connection.write(userMessages.H_KEY);
      break;
    case 'g':
      connection.write(userMessages.G_KEY);
      break;
    case 'b':
      connection.write(userMessages.B_KEY);
      break;
    case '?':
      connection.write(userMessages.QUESTION_MARK_KEY);
      break;

    //Terminate process
    case '\u0003':
      process.exit();
  }

};

module.exports = setupInput;