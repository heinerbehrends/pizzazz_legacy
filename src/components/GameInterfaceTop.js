import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MessageDisplay from './MessageDisplay'
import { letterValues } from '../Constants'
import { getScore } from '../scrabbleLogic/gameLogic'

class GameInterfaceTop extends Component {
  render() {
    const { gameState, gameData } = this.props
    let message = ''

    switch(gameState) {
      case 'init':
        message = "Welcome to"
        break
      case 'waiting':
        message = "Waiting for a new game"
        break
      case 'start':
        const maxLength = gameData.validWords.map(word => word.length).reduce((max, value) => Math.max(max, value))
        message = `There are ${ gameData.validWords.length } possible words. The longest is ${ maxLength } letters long.`
        break
      case 'solution':
        message = "Make your move or find a better word"
        break
      case 'endGame':
        message = 'Yeah'
        break
      default:
        message = ""
        break
    }

    return (
      <MessageDisplay message= { message } />
    )
  }
}

GameInterfaceTop.propTypes = {
  gameState: PropTypes.string,
  gameData: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    gameData: state.gameData,
  }
}

export default connect(mapStateToProps)(GameInterfaceTop)
