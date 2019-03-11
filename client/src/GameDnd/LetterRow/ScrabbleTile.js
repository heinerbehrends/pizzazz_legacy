import React, { PureComponent } from 'react';
import { LetterStyled, NumberSub } from './ScrabbleTileStyled';
import { letterValues } from '../../Constants';

class ScrabbleTile extends PureComponent {
  render() {
    const { letter, isValid } = this.props;

    return (
      <LetterStyled isValid={isValid} letter={letter}>
        { letter.toUpperCase() }
        <NumberSub>
          { letterValues[letter] }
        </NumberSub>
      </LetterStyled>
    );
  }
}

export default ScrabbleTile;
