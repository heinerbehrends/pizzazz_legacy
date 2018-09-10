import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageDisplay from './MessageDisplay'
import styled from 'styled-components'

class GameInterfaceTop extends Component {
  render() {
    const { gameState, gameData, firstPlayer } = this.props;
    let message = '';

    switch(gameState) {
      case 'init':
        return (
          <MessageDisplay message={ "Welcome to" } />
        )
      case 'waiting':
        return (
          <MessageDisplay message={ "Waiting for an opponent" } />
        )
      case 'makeWord':
        message = "You play against " + (this.props.firstPlayer ?
                                         this.props.gameData.player2Name :
                                         this.props.gameData.player1Name);
        return (
          <MessageDisplay message={ message } />
        )
      case 'play':
        return (
          <MessageDisplay message={ "Make your move or find a better word" } />
        )
      case 'showWinner':
        message = (firstPlayer ? gameData.player2Name : gameData.player1Name) + ' played ' +
        (firstPlayer ? gameData.player2Solution : gameData.player1Solution) + ' for ' +
        (firstPlayer ? gameData.player2Score : gameData.player1Score) + ' points';
        return (
          <MessageDisplay message={ message } />
        )
      default:
        return <MessageDisplay message={ "" } />
    }
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
