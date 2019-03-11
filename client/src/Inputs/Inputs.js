import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScreenName from './ScreenName/ScreenName';
import JoinButton from './Buttons/JoinButton';
import SolutionButton from './Buttons/SolutionButton';
import { sendNameAction } from './ScreenName/screenNameState';
import { joinGameAction, sendSolutionAction } from './Buttons/buttonsState';

const Inputs = ({
  sendName,
  screenName,
  canJoin,
  countdownValue,
  joinGame,
  isValidIndex,
  scrabbleBoard,
  sendSolution,
}) => (
  <>
    <ScreenName
      sendName={sendName}
      screenName={screenName}
    />
    <JoinButton
      canJoin={canJoin}
      countdownValue={countdownValue}
      joinGame={joinGame}
    />
    <SolutionButton
      isValidIndex={isValidIndex}
      scrabbleBoard={scrabbleBoard}
      sendSolution={sendSolution}
    />
  </>
);

Inputs.propTypes = {
  screenName: PropTypes.string.isRequired,
  sendName: PropTypes.func.isRequired,
  canJoin: PropTypes.bool.isRequired,
  countdownValue: PropTypes.number.isRequired,
  joinGame: PropTypes.func.isRequired,
  scrabbleBoard: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  sendSolution: PropTypes.func.isRequired,
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
  sendSolution: solution => dispatch(sendSolutionAction(solution)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
