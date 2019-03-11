import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { getWordScore } from '../../gameFlow/solutions/findWinner';
import { letterValues } from '../../Constants';

const SolutionButton = ({ isValidIndex, scrabbleBoard, sendSolution }) => {
    if (isValidIndex) {
      const solution = scrabbleBoard.substring(0, isValidIndex);
      const potentialScore = getWordScore(solution, letterValues);
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
  
  export default SolutionButton;