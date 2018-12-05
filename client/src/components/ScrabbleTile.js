// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { LetterStyled, NumberSub } from './styled/ScrabbleTileStyled';
import { letterValues } from '../Constants';

type TileProps = {
  isValid: boolean,
  letter: string,
};

class ScrabbleTile extends PureComponent<TileProps> {
  render(): Node {
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
