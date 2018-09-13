import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CountdownDisplay from './CountdownDisplay'
import { sendGameAction } from '../actions/apiActions'
import { decrementCountdownAction, stopCountdownAction } from '../actions/countdownActions'


class CountdownContainer extends Component {

  componentDidMount() {
    this.countdownTimer = setInterval(() => { this.props.decrementCountdown() }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value === 0) {
      this.props.sendGame(this.props.game.id, this.props.firstPlayer, this.props.makeMove);
      this.props.stopCountdown();
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimer);
  }

  render() {
    return (
      <CountdownDisplay value={ this.props.value } />
    )
  }
}

CountdownContainer.propTypes = {
  value: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired,
  firstPlayer: PropTypes.bool.isRequired,
  makeMove: PropTypes.array.isRequired,
  decrementCountdown: PropTypes.func.isRequired,
  stopCountdown: PropTypes.func.isRequired,
  sendGame: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    value: state.countdownValue,
    game: state.gameData,
    firstPlayer:state.firstPlayer,
    makeMove: state.makeMove,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrementCountdown: () => dispatch(decrementCountdownAction()),
    stopCountdown: () => dispatch(stopCountdownAction()),
    sendGame: (id, firstPlayer, makeMove) => dispatch(sendGameAction(id, firstPlayer, makeMove))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer)
