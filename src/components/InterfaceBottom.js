import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSolutionAction } from '../actions/actions';
import { getScore } from '../scrabbleLogic/gameLogic';
import { letterValues } from '../Constants';
import ScreenName from './ScreenName';
import { ButtonInput } from './styled/ScreenNameStyled';
import { JOIN_GAME } from '../actionTypes';


class InterfaceBottom extends PureComponent {
  render() {
    const {
      isValidIndex,
      validWord,
      sendSolutions,
      countdownValue,
      canJoin,
      joinGame,
    } = this.props;
    const solution = validWord.substring(0, isValidIndex);

    if (countdownValue > 20 && canJoin) {
      return (
        <ButtonInput
          type="button"
          readOnly
          autoFocus
          value={'Join the current game'}
          onClick={joinGame}
          />
      );
    }
    if (isValidIndex) {
      const potentialScore = getScore(solution, letterValues);
      const wordScoreString = `Play ${solution.toUpperCase()} for ${potentialScore} points`;
      return (
        <ButtonInput
          readOnly
          value={wordScoreString}
          onClick={() => sendSolutions(solution, potentialScore, isValidIndex)}
        />
      );
    }
    return <ScreenName />;
  }
}

InterfaceBottom.propTypes = {
  validWord: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  countdownValue: PropTypes.number.isRequired,
  canJoin: PropTypes.bool.isRequired,
  sendSolutions: PropTypes.func.isRequired,
  joinGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  validWord: state.validWord,
  isValidIndex: state.showValid,
  countdownValue: state.countdownValue,
  canJoin: state.canJoin,
});

const mapDispatchToProps = dispatch => ({
  sendSolutions: (word, score, index) => dispatch(sendSolutionAction(word, score, index)),
  joinGame: () => dispatch({ type: JOIN_GAME }),
});


export default connect(mapStateToProps, mapDispatchToProps)(InterfaceBottom);
