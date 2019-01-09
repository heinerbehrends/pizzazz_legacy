import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendNameAction, sendSolutionAction, joinGameAction } from '../actions/actionCreators';
import ScreenName from './ScreenName';
import { JoinButton, SolutionButton } from './Buttons';
import ProgressBar from './ProgressBar';
import Definitions from './Definitions'

const Interface = ({
  sendName,
  screenName,
  canJoin,
  countdownValue,
  joinGame,
  duration,
  isCountdown,
  isValidIndex,
  scrabbleBoard,
  sendSolution,
  definition,
}) => (
  <Fragment>
    <ScreenName
      sendName={sendName}
      screenName={screenName}
    />
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
    <Definitions
      definition={definition}
    />
  </Fragment>
);

Interface.propTypes = {
  screenName: PropTypes.string.isRequired,
  sendName: PropTypes.func.isRequired,
  canJoin: PropTypes.bool.isRequired,
  countdownValue: PropTypes.number.isRequired,
  joinGame: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
  scrabbleBoard: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  sendSolution: PropTypes.func.isRequired,
  definition: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  screenName: state.screenName,
  canJoin: state.canJoin,
  countdownValue: state.countdownValue,
  duration: state.countdownValue,
  isCountdown: state.isCountdown,
  scrabbleBoard: state.scrabbleBoard,
  isValidIndex: state.isValidIndex,
  definition: state.definition,
});

const mapDispatchToProps = dispatch => ({
  sendName: name => dispatch(sendNameAction(name)),
  joinGame: () => dispatch(joinGameAction()),
  sendSolution: (word, score, index) => dispatch(sendSolutionAction(word, score, index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Interface);
