import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageDisplay from './MessageDisplay'

class GameInterfaceTop extends Component {
  render() {
    const { gameState, gameData, firstPlayer } = this.props;
    let message = '';

    switch(gameState) {
      case 'init':
        message = "Welcome to";
        break;
      case 'waiting':
        message = "Waiting for an opponent";
        break;
      case 'makeWord':
        message = "You play against " + (this.props.firstPlayer ?
                                         this.props.gameData.player2Name :
                                         this.props.gameData.player1Name);
        break;
      case 'play':
        message = "Make your move or find a better word";
        break;
      case 'showWinner':
        message = (firstPlayer ? gameData.player2Name : gameData.player1Name) + ' played ' +
        (firstPlayer ? gameData.player2Solution : gameData.player1Solution) + ' for ' +
        (firstPlayer ? gameData.player2Score : gameData.player1Score) + ' points';
        break;
      default:
        message = "";
        break;
    }
    return (
      <MessageDisplay message= { message } />
    )
  }
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    firstPlayer: state.firstPlayer,
    gameData: state.gameData,
  }
}

export default connect(mapStateToProps)(GameInterfaceTop)
