import React, { Component } from 'react'
import CountdownContainer from './CountdownContainer'
import { connect } from 'react-redux'

class Countdown extends Component {

  render() {
    if (this.props.countdown) {
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
    countdown: state.countdown,
  }
}

export default connect(mapStateToProps)(Countdown)
