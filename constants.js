const IP = 'localhost';
const PORT = 50541;

//w,a,s,d 
const keyMovements = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
}

//Client Messages
const userMessages = {
  h: "Say: Hello!",
  g: "Say: Greetings!",
  b: "Say: Bye!",
  '?': "Say: I have a question!",
}

module.exports = {
  IP,
  PORT,
  keyMovements,
  userMessages,
};