import React from 'react'
import PropTypes from 'prop-types'
import { LetterStyled, NumberSub } from './styled/ScrabbleTileStyled'
import { letterValues } from '../Constants'

const ScrabbleTile = props => {
  const letter = props.letter;
  return (
    <LetterStyled isValid={ props.isValid } letter={ letter }>
      { letter }
      <NumberSub>
        { letterValues[letter] }
      </NumberSub>
    </LetterStyled>
  )
};

ScrabbleTile.propTypes = {
  isValid: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
}

export default ScrabbleTile;
