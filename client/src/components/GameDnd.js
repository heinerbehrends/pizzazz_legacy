import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';
import RandomLetters from './RandomLetters';
import ScrabbleBoard from './ScrabbleBoard';
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
/* eslint react/prefer-stateless-function: off */
class GameDnd extends Component {
  render() {
    return (
      <>
        <RandomLetters />
        <ScrabbleBoard />
        <DragLayerTile />
      </>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(GameDnd);
