import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeMoveAction } from '../actions'
import { getScoreWildcard } from '../scrabbleLogic/findWords'
import { letterValues } from '../Constants'
import ScreenName from './ScreenName'

class GameInterface extends Component {
  render() {
    var validWord = this.props.validWord.substring(0, this.props.isValidIndex);
    var potentialScore = getScoreWildcard(validWord, letterValues);
    var index = this.props.index;
    var gameState = this.props.gameState;

    if (gameState === 'init') {
      return (
        <ScreenName />
      )
    } else if (gameState === 'disabled') {
      return (
        <div className="my-5 pt-2">
          <span className = "text-secondary border-bottom px-3 pb-2">
            Move Letters To Form A Word
          </span>
        </div>
      )
    } else {
      return (
        <button className = "btn btn-outline-secondary my-5" word = { validWord }
         score = { potentialScore } onClick={ () => this.props.makeMove(validWord, potentialScore, index) } >
          { 'Play ' + validWord + ' For ' + potentialScore + ' Points'}
        </button>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    isValidIndex: state.showValid,
    gameState: state.gameState,
    index: state.showValid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeMove: (word, score, index) => dispatch(makeMoveAction(word, score, index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInterface)
