import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { makeMoveAction } from '../actions/actions'
import { getScore } from '../scrabbleLogic/gameLogic'
import { letterValues } from '../Constants'
import ScreenName from './ScreenName'
import { ButtonInput } from './styled/ScreenNameStyled'
import MessageDisplay from './MessageDisplay'
import Winner from './Winner'


class GameInterfaceBottom extends Component {

  render() {

    const { isValidIndex, gameState } = this.props;
    const validWord = this.props.validWord.substring(0, this.props.isValidIndex);
    const potentialScore = getScore(validWord, letterValues);
    let result;

    switch(gameState) {
      case 'init':
        result =
          <div>
            <MessageDisplay message={ "Enter your screen name to play" } />
            <ScreenName />
          </div>
        break;

      case 'makeWord':
        result = <MessageDisplay message={ "Move Letters To Form A Word" } />
        break;

      case 'makeWordEnd':
        result = <MessageDisplay message={ "Move Letters To Form A Word" } />;
        break;

      case 'play':
        let wordScoreString = 'Play ' + validWord + ' For ' + potentialScore + ' Points';
        result = <ButtonInput
                    readOnly
                    value={ wordScoreString }
                    onClick={ () => this.props.makeMove(validWord, potentialScore, isValidIndex) }
                  />;
        break;

      case 'showWinner':
        result = <Winner game={ this.props.gameData } firstPlayer={ this.props.firstPlayer} />
        break;

      default:
        result = null;
    }

    return result
  }
}

GameInterfaceBottom.propTypes = {
  validWord: PropTypes.string.isRequired,
  isValidIndex: PropTypes.number.isRequired,
  gameState: PropTypes.string.isRequired,
  firstPlayer: PropTypes.bool.isRequired,
  gameData: PropTypes.object,
  solution: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    isValidIndex: state.showValid,
    gameState: state.gameState,
    firstPlayer: state.firstPlayer,
    gameData: state.gameData,
    solution: state.makeMove,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeMove: (word, score, index) => dispatch(makeMoveAction(word, score, index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInterfaceBottom)
