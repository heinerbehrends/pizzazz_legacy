import React from 'react';
import PropTypes from 'prop-types';
import { getScore } from '../clientLogic/findWinner';
import { letterValues } from '../Constants';
import { ButtonStyled } from './styled/ScreenNameStyled';

export const Button = ({ clickHandler, value }) => (
  <ButtonStyled
    type="button"
    readOnly
    autoFocus
    onClick={clickHandler}
    value={value}
  />
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export const JoinButton = ({ countdownValue, canJoin, joinGame }) => {
  if (countdownValue > 20 && canJoin) {
    return (
      <Button
        value="Join the current game"
        clickHandler={joinGame}
      />
    );
  }
  return null;
};

JoinButton.propTypes = {
  countdownValue: PropTypes.number.isRequired,
  canJoin: PropTypes.bool.isRequired,
  joinGame: PropTypes.func.isRequired,
};

export const SolutionButton = ({ isValidIndex, scrabbleBoard, sendSolution }) => {
  if (isValidIndex) {
    const solution = scrabbleBoard.substring(0, isValidIndex);
    const potentialScore = getScore(solution, letterValues);
    const text = `Play ${solution.toUpperCase()} for ${potentialScore} points`;
    const clickHandler = () => sendSolution(solution, potentialScore, isValidIndex);
    return (
      <Button
        value={text}
        clickHandler={clickHandler}
      />
    );
  }
  return null;
};

SolutionButton.propTypes = {
  isValidIndex: PropTypes.number.isRequired,
  scrabbleBoard: PropTypes.string.isRequired,
  sendSolution: PropTypes.func.isRequired,
};
