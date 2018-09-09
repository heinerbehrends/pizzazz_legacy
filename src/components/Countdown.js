import React, { Component } from 'react'
import CountdownContainer from './CountdownContainer'
import { connect } from 'react-redux'

class Countdown extends Component {

  render() {
    if (this.props.isCountdown) {
      return (
        <CountdownContainer />
      )
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    isCountdown: state.isCountdown,
  }
}

export default connect(mapStateToProps)(Countdown)
