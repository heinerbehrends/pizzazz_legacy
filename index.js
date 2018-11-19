const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const getLetters = require('./serverLogic/randomLetters');
const findValid = require('./serverLogic/findValidWords');

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/public/index.html'));
});

const duration = 50;

let randomLetters;
let validWords;
let seconds = duration;

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('sendName', (name) => {
    // console.log(validWords);
    socket.emit('countdown', seconds);
    socket.broadcast.emit('newPlayer', name);
  });
  socket.on('joinGame', () => {
    socket.emit('StartGame', { randomLetters, validWords, seconds });
  });
  socket.on('sendSolution', (solution) => {
    socket.emit('newSolution', solution);
    socket.broadcast.emit('newSolution', solution);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = process.env.PORT || 3001;
http.listen(port, () => {
  console.log(`listening on *: ${port}`);
});


function* gameFlow() {
  const { makeRandomLetters, bagOfLetters } = getLetters;
  const { findAllValidWords, sortedWordsDict } = findValid;

  while (true) {
    randomLetters = makeRandomLetters(7, bagOfLetters);
    validWords = findAllValidWords(randomLetters, sortedWordsDict);
    yield io.emit('StartGame', { randomLetters, validWords, seconds });
    while (true) {
      seconds -= 1;
      yield seconds;
      if (seconds === 10) {
        io.emit('EndGame', { type: 'END_GAME' });
      }
      if (seconds === 0) {
        seconds = duration;
        break;
      }
    }
  }
}
const gen = gameFlow();
setInterval(() => gen.next(), 1000);
