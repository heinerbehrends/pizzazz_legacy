import React from 'react';
import Interface from './Interface';
import Message from './Message';
import DragLayerTile from './DragLayerTile';
import AppWrapper from './styled/AppStyled';
import GameDnd from './GameDnd';


const App = () => (
  <AppWrapper>
    <Message />
    <GameDnd />
    <Interface />
  </AppWrapper>
);


export default App;
