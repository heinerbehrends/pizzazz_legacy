import express from 'express';
import path from 'path';
import gameFlow from './gameFlow';
import connect from './connectIO';

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/public/index.html'));
});

const port = process.env.PORT || 3001;
http.listen(port, '0.0.0.0', () => {
  console.log(`listening on *: ${port}`);
});

connect(io);

const gameGenerator = gameFlow(io);
setInterval(() => gameGenerator.next(), 1000);
