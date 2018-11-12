import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LetterStyled, NumberSub } from './styled/ScrabbleTileStyled';
import { letterValues } from '../Constants';

class ScrabbleTile extends PureComponent {
  render() {
    const { letter, isValid } = this.props;

    return (
      <LetterStyled isValid={ isValid } letter={ letter }>
        { letter.toUpperCase() }
        <NumberSub>
          { letterValues[letter] }
        </NumberSub>
      </LetterStyled>
    );
  }
}

ScrabbleTile.propTypes = {
  isValid: PropTypes.bool.isRequired,
  letter: PropTypes.string.isRequired,
};

export default ScrabbleTile;
