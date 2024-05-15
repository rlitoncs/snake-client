const  connect  = require("./client");
const  setupInput  = require("./input");
console.log("Connecting ...");

//Driver code
let connObj = connect();
setupInput(connObj); // This ensures that the connection object is available in the input.js file for sending commands to the server.
