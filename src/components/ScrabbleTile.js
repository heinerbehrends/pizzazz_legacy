import React from 'react'
import { LetterStyled, NumberSub } from './styled/ScrabbleTileStyled'

const ScrabbleTile = (props) => {
  const letter = props.letter;
  return (
    <LetterStyled isValid={ props.isValid } letter={ letter }>
      { letter }
      <NumberSub>
        { props.letterValues[letter] }
      </NumberSub>
    </LetterStyled>
  )
};

export default ScrabbleTile;
