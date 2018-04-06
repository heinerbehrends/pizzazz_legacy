import React, { Component } from 'react'
import RandomLetters from './RandomLetters'
import GameInterface from './GameInterface'
import ValidWord from './ValidWord'
import StatusDisplay from './StatusDisplay'
import ScreenName from './ScreenName'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
  render() {
    return (
      <div className="text-center m-5">
        <RandomLetters />
        <ValidWord />
        <GameInterface />
        <StatusDisplay />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
