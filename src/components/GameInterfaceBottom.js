import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeMoveAction } from '../actions/gameActions'
import { getScore } from '../scrabbleLogic/gameLogic'
import { letterValues } from '../Constants'
import ScreenName from './ScreenName'
import MessageDisplay from './MessageDisplay'
import Winner from './Winner'


class GameInterfaceBottom extends Component {

  render() {

    const { isValidIndex, gameState } = this.props;
    const validWord = this.props.validWord.substring(0, this.props.isValidIndex);
    const potentialScore = getScore(validWord, letterValues);

    switch(gameState) {
      case 'init':
        return (
          <div>
            <MessageDisplay message={ "Enter your screen name to play" } />
            <ScreenName />
          </div>
        )
      case 'waiting':
        return null
      case 'makeWord':
        return (
          <MessageDisplay message={ "Move Letters To Form A Word" } />
        )
      case 'makeWordEnd':
        return (
        <MessageDisplay message={ "Move Letters To Form A Word" } />
        )
      case 'play':
        return (
          <button className = "btn btn-outline-secondary mb-5 px-3 d-block mx-auto" word = { validWord }
           score = { potentialScore } onClick={ () => this.props.makeMove(validWord, potentialScore, isValidIndex) } >
            { 'Play ' + validWord + ' For ' + potentialScore + ' Points'}
          </button>
        )
      case 'showWinner':
        return (
          <Winner />
        )
      default:
        return (
          <MessageDisplay message={ "" } />
        )
    }
  }
}

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    isValidIndex: state.showValid,
    gameState: state.gameState,
    firstPlayer: state.firstPlayer,
    gameData: state.gameData,
    makeMove: state.makeMove,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeMove: (word, score, index) => dispatch(makeMoveAction(word, score, index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInterfaceBottom)
