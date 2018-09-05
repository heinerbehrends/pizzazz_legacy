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
  r: 90;
  cx: 100;
  cy: 100;
  fill: none;
  stroke: lightgray;
  stroke-width: 6px;
  stroke-dasharray: 565.4867;
  stroke-dashoffset: 0;
  animation: dash 40s linear;
  animation-direction: reverse;
  @keyframes dash {
    to {
      stroke-dashoffset: 565.4867;
    }
  }
`;

const CircleBckgr = styled.circle`
  r: 90;
  cx: 100;
  cy: 100;
  fill: none;
  stroke: transparent;
  stroke-width: 6px;
`;


class CountdownPizzazz extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.countdown !== nextProps.countdown)
  }

  render() {
    let { countdown } = this.props;
    if (countdown !== true) {
      return null
    }
    else {
      return (
        <div className = "position-relative d-inline" style = {{ width: 160 + 'px', height: 160 + 'px', lineHeight: 200 + 'px'}}>
          <Countdown  date = {Date.now() + 40000}
          renderer = { renderer }
          onComplete = { () => (this.props.endGame(this.props.gameData.id, this.props.firstPlayer, this.props.makeMove)) }
          />
          <Svg width="200" height="200">
            <Circle />
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
    gameData: state.gameData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endGame: (id, firstPlayer, makeMove) => dispatch(endGameAction(id, firstPlayer, makeMove))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownPizzazz)
