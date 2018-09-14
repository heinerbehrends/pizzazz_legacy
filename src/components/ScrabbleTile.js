import React from 'react'
import PropTypes from 'prop-types'
import { LetterStyled, NumberSub } from './styled/ScrabbleTileStyled'
import { letterValues } from '../Constants'

const ScrabbleTile = props => {
  const { letter, isValid } = props;
  return (
    <LetterStyled isValid={ isValid } letter={ letter }>
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
