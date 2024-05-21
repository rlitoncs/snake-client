# Snake (Client Side)
A client-side implementation of the terminal-base Snake written in JavaScript (Node.js).


## Instructions
In order to play the game, both server side and client side need to be installed.

The link to installing the server side for Snake can be [found here](https://github.com/lighthouse-labs/snek-multiplayer) written by [lighthouselabs](https://github.com/lighthouse-labs/snek-multiplayer).

Once the server side is installed, you are ready to install the client side!

## Installation
### Clone from Repository
```bash
git clone git@github.com:rlitoncs/snake-client.git
cd snake-client

# Two Terminals should be opened simultaneously, one for the server and one for the client.
# Ensure the Server is up and running before you connect to it from the client side
node play.js
```

## Stretch
Currently, when a user creates a new connection, no message is broadcasted to the the other users (in the terminal) when a new a player has joined. It also does not display the number of users connected. 

Below I have linked my modification to the server side to include these features.

It follows the same installation process as the original, but with my added implementation.

Feel free to test it out with this new server to see the new features!

Link to the server-side repo is [here](https://github.com/rlitoncs/snake-server)