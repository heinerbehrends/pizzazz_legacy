import React, { Component } from 'react'
import RandomLetters from './RandomLetters'
import MakeRandomLettersButton from './MakeLettersButton'
import ValidWord from './ValidWord'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
  render() {
    return (
      <div className="text-center m-5">
        <RandomLetters />
        <ValidWord />
        <MakeRandomLettersButton />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
