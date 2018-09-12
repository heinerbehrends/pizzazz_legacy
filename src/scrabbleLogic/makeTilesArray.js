import React from 'react'
import { letterValues } from '../Constants'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLettersAction, showValidAction } from '../actions/gameActions'
import ScrabbleTile from '../components/ScrabbleTile'
import DraggableTile from '../components/DraggableTile'
import { LetterContainer } from '../components/styled/ScrabbleTileStyled'

function makeTilesArray(isCountdown, word, showValid, parent) {

  const tilesArray = [];
  let i = 0;

  for (let letter of word) {

    if (isCountdown) {
      tilesArray.push(
        <DraggableTile
          letter={ letter }
          letterValues={ letterValues }
          string = { word }
          showValid = { showValid > i }
          index={ i }
          key={ i }
          parent={ parent }
          replaceLetter={ replaceLetter }
          replaceLettersAction={ replaceLettersAction }
          showValidAction={ showValidAction }
        />
      )
      i++;
    }

    else {
      tilesArray.push(
        <LetterContainer key={ i } >
          <ScrabbleTile
            letter={ letter }
            index={ i }
            letterValues= { letterValues }
            isValid = { false }
          />
        </LetterContainer >
      )
      i++;
    }
  }

  return tilesArray
}

export default makeTilesArray
