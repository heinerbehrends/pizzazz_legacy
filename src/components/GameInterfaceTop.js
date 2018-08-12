import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeMoveAction } from '../actions'
import { endGameAction } from '../actions'

class GameInterfaceTop extends Component {
  render() {
    const { gameState, gameEnd, firstPlayer } = this.props;

    switch(gameState) {
      case 'init':
        return (
          <div className="my-5 pt-2">
            <span className = "text-secondary border-bottom px-3 pb-2">
              Welcome to the PIZZAZZ word game
            </span>
          </div>
        )
      case 'waiting':
        return (
          <div className="my-5 pt-2">
            <span className = "text-secondary border-bottom px-3 pb-2">
              Waiting for an opponent
            </span>
          </div>
        )
      case 'makeWord':
        return (
          <div className = "my-5 pt-2">
            <span className = "text-secondary border-bottom px-3 pb-2">
              {'You play against ' + (this.props.firstPlayer ? this.props.gameEnd.player2Name : this.props.gameEnd.player1Name)}
            </span>
          </div>
        )
      case 'play':
        return (
          <div className = "my-5 pt-2">
            <span className = "text-secondary border-bottom px-3 pb-2">
              {'Make your move or find a better word'}
            </span>
          </div>
        )
      case 'showWinner':
        return (
          <div className = "my-5 pt-2">
            <span className="text-secondary border-bottom px-3 pb-2">
              { (firstPlayer ? gameEnd.player2Name : gameEnd.player1Name) + ' played ' +
              (firstPlayer ? gameEnd.player2Solution : gameEnd.player1Solution) + ' for ' +
              (firstPlayer ? gameEnd.player2Score : gameEnd.player1Score) + ' points' }
            </span>
          </div>
        )
      default:
        return (
          <div className="my-5 pt-2">
            <span className = "text-secondary border-bottom px-3 pb-2">
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

export default connect(mapStateToProps, mapDispatchToProps)(GameInterfaceTop)
