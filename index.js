const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const getLetters = require('./serverLogic/randomLetters')
const findValid = require('./serverLogic/findValidWordsWildcard')
const duration = 50;

let randomLetters;
let validWords;
let seconds = duration;

io.on('connection', socket => {
  console.log('A user connected');
  socket.on('sendName', name => {
    console.log(validWords);
    socket.emit('countdown', seconds );
    socket.broadcast.emit('newPlayer', name);
  })
  socket.on('joinGame', () => {
    socket.emit('StartGame', { randomLetters, validWords, seconds });
  })
  socket.on('sendSolution', solution => {
    console.log(solution);
    socket.emit('newSolution', solution);
    socket.broadcast.emit('newSolution', solution);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
})

http.listen(3001, () => {
  console.log('listening on *:3001');
})

function* countdown() {
  while (true) {
    seconds -= 1;
    yield seconds;
    if (seconds === 10) {
      io.emit('EndGame', { type: 'END_GAME' })
      console.log('End Game send');
    }
    if (seconds === 0) {
      seconds = duration;
      break;
    }
  }
}

function* gameFlow() {
  const { makeRandomLettersVowels, bagOfLetters } = getLetters;
  const { findAllValidWords, sortedValidWords } = findValid;
  while (true) {
    randomLetters = makeRandomLettersVowels(7, bagOfLetters);
    validWords = findAllValidWords(randomLetters, sortedValidWords);
    yield io.emit('StartGame', { randomLetters, validWords, seconds });
    yield* countdown();
  }
}
const gen = gameFlow();
setInterval(() => gen.next(), 1000)
