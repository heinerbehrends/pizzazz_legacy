import React from 'react';
import { letterValues } from '../Constants';
import { replaceLetter } from '../scrabbleLogic/gameLogic';
import { replaceLettersAction, showValidAction } from '../actions/actions';
import ScrabbleTile from '../components/ScrabbleTile';
import DraggableTile from '../components/DraggableTile';
import { LetterContainer } from '../components/styled/ScrabbleTileStyled';

function makeTilesArray(isCountdown, word, showValid, parent) {
  return isCountdown
    ? word.split('')
      .map((letter, i) => (
        <DraggableTile
          letter={letter}
          letterValues={letterValues}
          string={word}
          showValid={showValid > i}
          index={i}
          key={i}
          parent={parent}
          replaceLetter={replaceLetter}
          replaceLettersAction={replaceLettersAction}
          showValidAction={showValidAction}
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
