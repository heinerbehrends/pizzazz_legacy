import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSolutionAction, joinGameAction } from '../actions/actionCreators';
import { getScore } from '../clientLogic/gameLogic';
import { letterValues } from '../Constants';
import ScreenName from './ScreenName';
import { ButtonInput } from './styled/ScreenNameStyled';


class Interface extends PureComponent {
  render() {
    const {
      isValidIndex,
      scrabbleBoard,
      sendSolutions,
      countdownValue,
      canJoin,
      joinGame,
    } = this.props;
    const solution = scrabbleBoard.substring(0, isValidIndex);

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
  scrabbleBoard: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  countdownValue: PropTypes.number.isRequired,
  canJoin: PropTypes.bool.isRequired,
  sendSolutions: PropTypes.func.isRequired,
  joinGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  scrabbleBoard: state.scrabbleBoard,
  isValidIndex: state.isValidIndex,
  countdownValue: state.countdownValue,
  canJoin: state.canJoin,
});

const mapDispatchToProps = dispatch => ({
  sendSolutions: (word, score, index) => dispatch(sendSolutionAction(word, score, index)),
  joinGame: () => dispatch(joinGameAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Interface);
