import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameInterfaceTop extends Component {
  render() {
    const { gameState, gameData, firstPlayer } = this.props;

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
              {'You play against ' + (this.props.firstPlayer ? this.props.gameData.player2Name : this.props.gameData.player1Name)}
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
              { (firstPlayer ? gameData.player2Name : gameData.player1Name) + ' played ' +
              (firstPlayer ? gameData.player2Solution : gameData.player1Solution) + ' for ' +
              (firstPlayer ? gameData.player2Score : gameData.player1Score) + ' points' }
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
    gameData: state.gameData,
    makeMove: state.makeMove
  }
}

export default connect(mapStateToProps)(GameInterfaceTop)
