import dictionary from './serverLogic/parseDict';
import { getState } from './gameFlow';

const connect = io => io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('sendName', (name) => {
    console.log('name sent');
    socket.emit('countdown', getState().seconds);
    socket.broadcast.emit('newPlayer', name);
  });
  socket.on('joinGame', () => {
    socket.emit('StartGame', getState());
  });
  socket.on('sendSolution', (solution) => {
    socket.emit('newSolution', solution);
    socket.broadcast.emit('newSolution', solution);
  });
  socket.on('lookUp', ({ word }) => {
    console.log(dictionary[word]);
    socket.emit('definition', dictionary[word]);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

export default connect;
