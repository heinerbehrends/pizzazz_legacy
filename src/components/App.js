import React, { Component } from 'react'
// import RandomLetters from './RandomLetters'
import RandomLettersHTML from './RandomLettersHTML'
import GameInterfaceBottom from './GameInterfaceBottom'
import GameInterfaceTop from './GameInterfaceTop'
import ValidWordHTML from './ValidWordHTML'
import CountdownPizzazz from './CountdownPizzazz'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
  render() {
    return (
      <div className="text-center m-5">
        <GameInterfaceTop />
        <RandomLettersHTML />
        <ValidWordHTML />
        <GameInterfaceBottom />
        <CountdownPizzazz />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
