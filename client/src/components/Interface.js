import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSolutionAction, joinGameAction } from '../actions/actionCreators';
import ScreenName from './ScreenName';
import { JoinButton, SolutionButton } from './Buttons';
import ProgressBar from './ProgressBar';

const Interface = ({
  canJoin,
  countdownValue,
  joinGame,
  duration,
  isCountdown,
  isValidIndex,
  scrabbleBoard,
  sendSolution,
}) => (
  <div>
    <ScreenName />
    <JoinButton
      canJoin={canJoin}
      countdownValue={countdownValue}
      joinGame={joinGame}
    />
    <ProgressBar
      duration={duration}
      isCountdown={isCountdown}
    />
    <SolutionButton
      isValidIndex={isValidIndex}
      scrabbleBoard={scrabbleBoard}
      sendSolution={sendSolution}
    />
  </div>
);

Interface.propTypes = {
  canJoin: PropTypes.bool.isRequired,
  countdownValue: PropTypes.number.isRequired,
  joinGame: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
  scrabbleBoard: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  sendSolution: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  canJoin: state.canJoin,
  countdownValue: state.countdownValue,
  duration: state.countdownValue,
  isCountdown: state.isCountdown,
  scrabbleBoard: state.scrabbleBoard,
  isValidIndex: state.isValidIndex,
});

const mapDispatchToProps = dispatch => ({
  joinGame: () => dispatch(joinGameAction()),
  sendSolution: (word, score, index) => dispatch(sendSolutionAction(word, score, index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Interface);
