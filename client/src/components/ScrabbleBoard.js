import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrabbleBoardStyled from './styled/ScrabbleBoardStyled';
import makeTilesArray from '../componentLogic/makeTilesArray';

class ScrabbleBoard extends PureComponent {
  render() {
    const { validWord, isValidIndex, isCountdown } = this.props;
    const tilesArray = makeTilesArray(isCountdown, validWord, isValidIndex, 'validWord');

    return (
      <ScrabbleBoardStyled>
        { tilesArray }
      </ScrabbleBoardStyled>
    );
  }
}

ScrabbleBoard.propTypes = {
  validWord: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  validWord: state.validWord,
  isValidIndex: state.isValidIndex,
  isCountdown: state.isCountdown,
});

export default connect(mapStateToProps)(ScrabbleBoard);
