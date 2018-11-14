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
    console.log(solution);
    socket.emit('newSolution', solution);
    socket.broadcast.emit('newSolution', solution);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});

function* countdown() {
  while (true) {
    seconds -= 1;
    yield seconds;
    if (seconds === 10) {
      io.emit('EndGame', { type: 'END_GAME' });
      console.log('End Game send');
    }
    if (seconds === 0) {
      seconds = duration;
      break;
    }
  }
}

function* gameFlow() {
  const { makeRandomLetters, bagOfLetters } = getLetters;
  const { findAllValidWords, sortedWords } = findValid;

  while (true) {
    randomLetters = makeRandomLetters(7, bagOfLetters);
    validWords = findAllValidWords(randomLetters, sortedWords);
    yield io.emit('StartGame', { randomLetters, validWords, seconds });
    yield* countdown();
  }
}
const gen = gameFlow();
setInterval(() => gen.next(), 1000);
