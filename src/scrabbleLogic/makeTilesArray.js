import React from 'react'
import { letterValues } from '../Constants'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLetterAction, showValidAction } from '../actions/gameActions'
import ScrabbleTile from '../components/ScrabbleTile'
import DraggableTile from '../components/DraggableTile'

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
          replaceLetterAction={ replaceLetterAction }
          showValidAction={ showValidAction }
        />
      )
      i++;
    }

    else {
      tilesArray.push(
        <div key={ i } style={{ width: 13.68 + "%" }}>
          <ScrabbleTile
            letter={ letter }
            index={ i }
            letterValues= { letterValues }
            isValid = { false }
          />
        </div>
      )
      i++;
    }
  }

  return tilesArray
}

export default makeTilesArray
