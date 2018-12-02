import React from 'react';
import PropTypes from 'prop-types';
import ScrabbleTile from './ScrabbleTile';
import DraggableTile from './DraggableTile';
import { LetterContainer } from './styled/ScrabbleTileStyled';

/* eslint react/no-array-index-key: off */
const LetterRow = ({
  isDraggable, letters, parent, isValidIndex,
}) => {
  if (isDraggable) {
    return letters.split('')
      .map((letter, i) => (
        <DraggableTile
          letter={letter}
          string={letters}
          isValid={isValidIndex > i}
          index={i}
          key={i}
          parent={parent}
        />
      ));
  }
  return letters.split('')
    .map((letter, i) => (
      <LetterContainer key={i}>
        <ScrabbleTile
          letter={letter}
          index={i}
          isValid={false}
        />
      </LetterContainer>
    ));
};
//     ? )
//     : letters.split('')
//       .map((letter, i) => (
//         <LetterContainer key={i}>
//           <ScrabbleTile
//             letter={letter}
//             index={i}
//             isValid={false}
//           />
//         </LetterContainer>
//       ))
// );

LetterRow.propTypes = {
  isDraggable: PropTypes.bool.isRequired,
  letters: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number,
};

LetterRow.defaultProps = {
  isValidIndex: 0,
};

export default LetterRow;
