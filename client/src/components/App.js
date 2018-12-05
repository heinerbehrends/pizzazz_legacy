// @flow
/* eslint react/prefer-stateless-function: off */
// react dnd warning when using stateless component
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';
import RandomLetters from './RandomLetters';
import Interface from './Interface';
import Message from './Message';
import ScrabbleBoard from './ScrabbleBoard';
import DragLayerTile from './DragLayerTile';
import AppWrapper from './styled/AppStyled';
import type { Node } from 'react';


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


export class App extends Component<{}> {
  render(): Node {
    return (
      <AppWrapper>
        <Message />
        <RandomLetters />
        <ScrabbleBoard />
        <Interface />
        <DragLayerTile />
      </AppWrapper>
    );
  }
}


export default DragDropContext(MultiBackend(HTML5toTouch))(App);
