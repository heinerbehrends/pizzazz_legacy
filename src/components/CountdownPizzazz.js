import React, { Component } from 'react'
import Countdown from 'react-countdown-now'
import { connect } from 'react-redux'
import { endGameAction } from '../actions'

const renderer = ({ seconds }) => {
  return <span style={{left: 45 + 'px', bottom: 45 + 'px'}} className = "text-secondary display-1 pt-4 position-absolute">{ seconds }</span>;
}

class CountdownPizzazz extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.countdown !== nextProps.countdown)
  }

  render() {
    let { countdown, makeMove } = this.props;
    if (countdown !== true) {
      return null
    }
    else {
      return (
        <div className = "position-relative d-inline" style = {{ width: 160 + 'px', height: 160 + 'px', lineHeight: 200 + 'px'}}>
          <Countdown  date = {Date.now() + 20000}
          renderer = { renderer }
          onComplete = { () => (this.props.endGame(this.props.firstPlayer, this.props.makeMove)) }
          />
          <svg width="200" height="200">
            <circle r="90" cx="100" cy="100" fill="none" stroke="darkgray" strokeWidth="6"></circle>
          </svg>
        </div>
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
