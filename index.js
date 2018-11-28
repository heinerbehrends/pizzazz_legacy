const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const { gameFlow } = require('./gameFlow');
const connectIO = require('./connectIO');

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/public/index.html'));
});

const port = process.env.PORT || 3001;
http.listen(port, () => {
  console.log(`listening on *: ${port}`);
});

const gameGenerator = gameFlow(io);
setInterval(() => gameGenerator.next(), 1000);

const { connect } = connectIO;
connect(io);
