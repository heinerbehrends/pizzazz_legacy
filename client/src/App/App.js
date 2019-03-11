import React from 'react';
import Message from '../Message/Message';
import GameDnd from '../GameDnd/GameDnd';
import Inputs from '../Inputs/Inputs';
import ProgressBar from '../ProgressBar/ProgressBar';
import Definitions from '../Definitions/Definitions';
import AppWrapper from './AppStyled';

const App = () => (
  <AppWrapper>
    <Message />
    <GameDnd />
    <ProgressBar />
    <Definitions />
    <Inputs />
  </AppWrapper>
);


export default App;
