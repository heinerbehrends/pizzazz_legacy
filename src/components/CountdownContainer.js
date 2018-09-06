import React, { Component } from 'react'
import Countdown from './Countdown'
import { connect } from 'react-redux'
import { endGameAction } from '../actions/apiActions'
import { stopCountdownAction } from '../actions/countdownActions'

class CountdownContainer extends Component {


componentDidUpdate(prevProps) {
  if (prevProps.value === 0) {
    this.props.endGame(this.props.game.id, this.props.firstPlayer, this.props.makeMove);
    this.props.stopCountdown();
  }
}


  render() {
    if (this.props.countdown) {
      return(
        <Countdown value={ this.props.value } countdown={ this.props.countdown }/>
      )
    }
    else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    countdown: state.countdown,
    value: state.countdownValue,
    game: state.gameData,
    firstPlayer:state.firstPlayer,
    makeMove: state.makeMove,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    stopCountdown: () => dispatch(stopCountdownAction()),
    endGame: (id, firstPlayer, makeMove) => dispatch(endGameAction(id, firstPlayer, makeMove))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer)
