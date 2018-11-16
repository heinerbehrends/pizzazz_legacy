import React from 'react';
import ScrabbleTile from '../components/ScrabbleTile';
import DraggableTile from '../components/DraggableTile';
import { LetterContainer } from '../components/styled/ScrabbleTileStyled';

/* eslint react/no-array-index-key: off */
function makeTilesArray(isCountdown, word, isValidIndex, parent) {
  return isCountdown
    ? word.split('')
      .map((letter, i) => (
        <DraggableTile
          letter={letter}
          string={word}
          isValid={isValidIndex > i}
          index={i}
          key={i}
          parent={parent}
        />
      ))
    : word.split('')
      .map((letter, i) => (
        <LetterContainer key={i}>
          <ScrabbleTile
            letter={letter}
            index={i}
            isValid={false}
          />
        </LetterContainer>
      ));
}

export default makeTilesArray;
