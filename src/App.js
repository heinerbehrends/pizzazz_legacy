import React from 'react'
import RandomLetters from './RandomLetters'
import MakeRandomLettersButton from './MakeLettersButton'
import ValidWord from './ValidWord'

const App = () => (
  <div className="text-center m-5">
    <RandomLetters />
    <ValidWord />
    <MakeRandomLettersButton />
  </div>
)

export default App
