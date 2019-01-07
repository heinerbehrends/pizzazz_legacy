import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrabbleBoardStyled, { PizzazzBoardStyled, ScrabbleBoardContainer } from './styled/ScrabbleBoardStyled';
import LetterRow from './LetterRow';
import { ReactComponent as PizzazzBoard } from './pizzazzBoard.svg';

const ScrabbleBoard = ({ scrabbleBoard, isValidIndex, isDraggable }) => (
  <ScrabbleBoardContainer>
    <PizzazzBoardStyled>
      <PizzazzBoard style={{ width: '100%', height: '100%' }} />
    </PizzazzBoardStyled>
    <ScrabbleBoardStyled>
      <LetterRow
        isDraggable={isDraggable}
        isValidIndex={isValidIndex}
        letters={scrabbleBoard}
        parent="scrabbleBoard"
      />
    </ScrabbleBoardStyled>
  </ScrabbleBoardContainer>
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
