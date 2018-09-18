import React, { Component } from 'react'
import styled from 'styled-components'
import RandomLetters from './RandomLetters'
import CountdownContainer from './CountdownContainer'
import GameInterfaceBottom from './GameInterfaceBottom'
import GameInterfaceTop from './GameInterfaceTop'
import ValidWordHTML from './ValidWordHTML'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend'


const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend({enableMouseEvents: true}),
      preview: true,
      transition: TouchTransition
    }
  ]
};

const AppWrapper = styled.div`
  height: 100vh;
  background-color: #F9F8F2;
  text-align: center;
  padding: 3rem 0;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GameInterfaceTop />
        <RandomLetters />
        <ValidWordHTML />
        <GameInterfaceBottom />
        <CountdownContainer />
      </AppWrapper>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);
