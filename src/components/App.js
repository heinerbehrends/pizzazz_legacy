import React, { Component } from 'react'
import styled from 'styled-components'
import RandomLettersHTML from './RandomLettersHTML'
import Countdown from './Countdown'
import GameInterfaceBottom from './GameInterfaceBottom'
import GameInterfaceTop from './GameInterfaceTop'
import ValidWordHTML from './ValidWordHTML'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const AppWrapper = styled.div`
  height: 100vh;
  background-color: #F9F8F2;
  text-align: center;
  padding: 3rem 0;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GameInterfaceTop />
        <RandomLettersHTML />
        <ValidWordHTML />
        <GameInterfaceBottom />
        <Countdown />
      </AppWrapper>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
