import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeMoveAction } from '../actions'
import { endGameAction } from '../actions'
import { getScoreWildcard } from '../scrabbleLogic/findWords'
import { letterValues } from '../Constants'
import ScreenName from './ScreenName'
import Winner from './Winner'


class GameInterfaceBottom extends Component {
  render() {
    const validWord = this.props.validWord.substring(0, this.props.isValidIndex);
    const potentialScore = getScoreWildcard(validWord, letterValues);
    const { index, gameState } = this.props;
    switch(gameState) {
      case 'init':
        return (
          <div>
            <div className="mb-5 pt-2">
              <span className = "text-secondary border-bottom px-3 pb-2">
                Enter your screen name to play
              </span>
            </div>
            <ScreenName />
          </div>
        )
      case 'waiting':
        return null
      case 'makeWord':
        return (
          <div className="mb-5">
            <span className = "text-secondary border-bottom px-3 pb-2">
            Move Letters To Form A Word
            </span>
          </div>
        )
      case 'makeWordEnd':
        return (
          <div className="mb-5">
            <span className = "text-secondary border-bottom px-3 pb-2">
            Move Letters To Form A Word
            </span>
          </div>
        )
      case 'play':
        return (
          <button className = "btn btn-outline-secondary mb-5 px-3 d-block mx-auto" word = { validWord }
           score = { potentialScore } onClick={ () => this.props.makeMove(validWord, potentialScore, index) } >
            { 'Play ' + validWord + ' For ' + potentialScore + ' Points'}
          </button>
        )
      case 'showWinner':
        return (
          <Winner />
        )
      default:
      return (
        <div className="mb-5">
          <span className = "text-secondary border-bottom px-3 pb-2">
          Move Letters To Form A Word
          </span>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    isValidIndex: state.showValid,
    gameState: state.gameState,
    index: state.showValid,
    firstPlayer: state.firstPlayer,
    gameEnd: state.gameEnd,
    makeMove: state.makeMove
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeMove: (word, score, index) => dispatch(makeMoveAction(word, score, index)),
    endGame: (firstPlayer, makeMove) => dispatch(endGameAction(firstPlayer, makeMove)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInterfaceBottom)
