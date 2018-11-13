import React from 'react';
import { letterValues } from '../Constants';
import { replaceLetter } from '../scrabbleLogic/gameLogic';
import { replaceLettersAction, isValidIndexAction } from '../actions/actions';
import ScrabbleTile from '../components/ScrabbleTile';
import DraggableTile from '../components/DraggableTile';
import { LetterContainer } from '../components/styled/ScrabbleTileStyled';

function makeTilesArray(isCountdown, word, isValidIndex, parent) {
  return isCountdown
    ? word.split('')
      .map((letter, i) => (
        <DraggableTile
          letter={letter}
          letterValues={letterValues}
          string={word}
          isValidIndex={isValidIndex > i}
          index={i}
          key={i}
          parent={parent}
          replaceLetter={replaceLetter}
          replaceLettersAction={replaceLettersAction}
          isValidIndexAction={isValidIndexAction}
        />
      ))
    : word.split('')
      .map((letter, i) => (
        <LetterContainer key={i}>
          <ScrabbleTile
            letter={letter}
            index={i}
            letterValues={letterValues}
            isValid={false}
          />
        </LetterContainer>
      ));
}

export default makeTilesArray;