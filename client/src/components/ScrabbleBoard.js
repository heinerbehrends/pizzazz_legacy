import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrabbleBoardStyled from './styled/ScrabbleBoardStyled';
import makeTilesArray from '../clientLogic/makeTilesArray';

class ScrabbleBoard extends PureComponent {
  render() {
    const { scrabbleBoard, isValidIndex, isCountdown } = this.props;
    const tilesArray = makeTilesArray(isCountdown, scrabbleBoard, isValidIndex, 'scrabbleBoard');

    return (
      <ScrabbleBoardStyled>
        { tilesArray }
      </ScrabbleBoardStyled>
    );
  }
}

ScrabbleBoard.propTypes = {
  scrabbleBoard: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  scrabbleBoard: state.scrabbleBoard,
  isValidIndex: state.isValidIndex,
  isCountdown: state.isCountdown,
});

export default connect(mapStateToProps)(ScrabbleBoard);
