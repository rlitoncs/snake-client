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
  H_KEY: "Say: Hello!",
  G_KEY: "Say: Greetings!",
  B_KEY: "Say: Bye!",
  QUESTION_MARK_KEY: "Say: I have a question!",
}

module.exports = {
  IP,
  PORT,
  keyMovements,
  userMessages,
};