import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountdownContainer from './CountdownContainer'
import { connect } from 'react-redux'

class Countdown extends Component {

  render() {
    return this.props.isCountdown ?
           <CountdownContainer /> : null;
  }
}

Countdown.propTypes = {
  isCountdown: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    isCountdown: state.isCountdown,
  }
}

export default connect(mapStateToProps)(Countdown)
