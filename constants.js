const IP = 'localhost';
const PORT = 50541;

//w,a,s,d 
const keyMovements = {
  MOVE_UP_KEY: "Move: up",
  MOVE_LEFT_KEY: "Move: left",
  MOVE_DOWN_KEY: "Move: down",
  MOVE_RIGHT_KEY: "Move: right"
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