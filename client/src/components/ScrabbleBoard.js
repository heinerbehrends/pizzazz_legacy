import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrabbleBoardStyled from './styled/ScrabbleBoardStyled';
import LetterRow from './LetterRow';

const ScrabbleBoard = ({ scrabbleBoard, isValidIndex, isDraggable }) => (
  <ScrabbleBoardStyled>
    <LetterRow
      isDraggable={isDraggable}
      isValidIndex={isValidIndex}
      letters={scrabbleBoard}
      parent="scrabbleBoard"
    />
  </ScrabbleBoardStyled>
);

ScrabbleBoard.propTypes = {
  scrabbleBoard: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  isDraggable: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  scrabbleBoard: state.scrabbleBoard,
  isValidIndex: state.isValidIndex,
  isDraggable: state.isCountdown,
});

export default connect(mapStateToProps)(ScrabbleBoard);
