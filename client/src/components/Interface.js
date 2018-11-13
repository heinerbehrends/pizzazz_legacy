import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSolutionAction, joinGameAction } from '../actions/actions';
import { getScore } from '../scrabbleLogic/gameLogic';
import { letterValues } from '../Constants';
import ScreenName from './ScreenName';
import { ButtonInput } from './styled/ScreenNameStyled';


class Interface extends PureComponent {
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
          value="Join the current game"
          onClick={joinGame}
        />
      );
    }
    if (isValidIndex) {
      const potentialScore = getScore(solution, letterValues);
      const buttonValue = `Play ${solution.toUpperCase()} for ${potentialScore} points`;
      return (
        <ButtonInput
          type="button"
          readOnly
          autoFocus
          value={buttonValue}
          onClick={() => sendSolutions(solution, potentialScore, isValidIndex)}
        />
      );
    }
    return <ScreenName />;
  }
}

Interface.propTypes = {
  validWord: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  countdownValue: PropTypes.number.isRequired,
  canJoin: PropTypes.bool.isRequired,
  sendSolutions: PropTypes.func.isRequired,
  joinGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  validWord: state.validWord,
  isValidIndex: state.isValidIndex,
  countdownValue: state.countdownValue,
  canJoin: state.canJoin,
});

const mapDispatchToProps = dispatch => ({
  sendSolutions: (word, score, index) => dispatch(sendSolutionAction(word, score, index)),
  joinGame: () => dispatch(joinGameAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Interface);
