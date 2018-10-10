import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';
import RandomLetters from './RandomLetters';
import Countdown from './Countdown';
import GameInterfaceBottom from './GameInterfaceBottom';
import MessageTop from './MessageTop';
import ValidWordHTML from './ValidWordHTML';
import DragLayerTile from './DragLayerTile';


const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
    },
    {
      backend: TouchBackend({ enableMouseEvents: true }),
      preview: true,
      transition: TouchTransition,
    },
  ],
};

const AppWrapper = styled.div`
  text-align: center;
  padding: 3rem 0;
  box-sizing: border-box;
`;

const App = () => (
  <AppWrapper>
    <MessageTop />
    <RandomLetters />
    <ValidWordHTML />
    <GameInterfaceBottom />
    <Countdown />
    <DragLayerTile />
  </AppWrapper>
);


export default DragDropContext(MultiBackend(HTML5toTouch))(App);
