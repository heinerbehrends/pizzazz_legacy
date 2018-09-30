const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const getLetters = require('./randomLetters')
const findValid = require('./findValidWordsWildcard')


function emitRandom() {
  const randomLetters = getLetters.makeRandomLettersVowels(7, getLetters.bagOfLetters)
  const validWords = findValid.findAllValidWords(randomLetters, findValid.sortedValidWords)
  io.emit('StartGame', { randomLetters, validWords })
}

setInterval(emitRandom, 20000)

io.on('connection', socket => {
  console.log('A user connected')

  socket.on('sendSolution', solution => {
    socket.emit('newSolution', solution)
    socket.broadcast.emit('newSolution', solution)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

http.listen(3001, () => {
  console.log('listening on *:3001')
})
