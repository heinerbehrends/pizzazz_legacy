import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendSolutionAction } from '../actions/actions';
import { getScore } from '../scrabbleLogic/gameLogic';
import { letterValues } from '../Constants';
import ScreenName from './ScreenName';
import { ButtonInput } from './styled/ScreenNameStyled';
import MessageDisplay from './MessageDisplay';


class GameInterfaceBottom extends PureComponent {
  render() {
    const { isValidIndex, validWord, message, isVisible, solutions } = this.props;
    const solution = validWord.substring(0, isValidIndex);
    let output = {};

    if (isValidIndex) {
      const potentialScore = getScore(solution, letterValues);
      const wordScoreString = `Play ${solution.toUpperCase()} for ${potentialScore} points`;
      output = (
        <ButtonInput
          readOnly
          value={wordScoreString}
          onClick={() => solutions(solution, potentialScore, isValidIndex)}
        />
      );
    } else {
      output = !isVisible ? null : (
        <div>
          <MessageDisplay message={message} />
          <ScreenName />
        </div>
      );
    }
    return output;
  }
}

GameInterfaceBottom.propTypes = {
  validWord: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  solutions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  validWord: state.validWord,
  isValidIndex: state.showValid,
  message: state.messageBottom.message,
  isVisible: state.messageBottom.isVisible,
});

const mapDispatchToProps = dispatch => ({
  solutions: (word, score, index) => dispatch(sendSolutionAction(word, score, index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameInterfaceBottom);
