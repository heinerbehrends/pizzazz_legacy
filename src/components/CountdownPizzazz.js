import React, { Component } from 'react'
import Countdown from 'react-countdown-now'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { endGameAction } from '../actions'

const renderer = ({ seconds }) => {
  return <span style={{left: 45 + 'px', bottom: 45 + 'px'}} className = "text-secondary display-1 pt-4 position-absolute">{ seconds }</span>;
}

const Svg = styled.svg`
  transform: rotate(270deg);
`;

const Circle = styled.circle`
  stroke-dasharray: 565.4867;
  stroke-dashoffset: 0;
  animation: dash 20s linear;
  animation-direction: reverse;

  @keyframes dash {
    to {
      stroke-dashoffset: 565.4867;
    }
  }
`;

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
          <Svg width="200" height="200">
            <Circle r="90" cx="100" cy="100" fill="none" stroke="darkgray" strokeWidth="6"></Circle>
          </Svg>
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
