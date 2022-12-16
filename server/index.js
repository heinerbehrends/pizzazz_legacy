import express from 'express';
import path from 'path';
import gameFlow from './gameFlow';
import connect from './connectIO';

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const compression = require('compression');

app.use(compression());

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/public/index.html'));
});

const port = process.env.PORT || 3001;
http.listen(port, () => {
  console.log(`listening on *: ${port}`);
});

connect(io);

const gameGenerator = gameFlow(io);
setInterval(() => gameGenerator.next(), 1000);

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
