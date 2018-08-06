import React, { Component } from 'react'
import Countdown from 'react-countdown-now'
import { connect } from 'react-redux'
import { endGameAction } from '../actions'

const renderer = ({ seconds }) => {
  return <span className = "text-secondary display-1 pt-4 d-inline-block">{ seconds }</span>;
}

class CountdownPizzazz extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.countdown !== nextProps.countdown)
  }

  render() {
    let { countdown, makeMove } = this.props;
    console.log(countdown);
    if (countdown !== true) {
      return null;
    }
    else {
      console.log(makeMove);
      return (
          <Countdown  date = {Date.now() + 20000}
          renderer = { renderer }
          onComplete = { () => (this.props.endGame(this.props.firstPlayer, this.props.makeMove)) }
          />
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    countdown: state.countdown,
    firstPlayer: state.firstPlayer,
    makeMove: state.makeMove,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endGame: (firstPlayer, makeMove) => dispatch(endGameAction(firstPlayer, makeMove))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownPizzazz)
