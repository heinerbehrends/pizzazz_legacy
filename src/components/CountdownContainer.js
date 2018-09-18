import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CountdownDisplay from './CountdownDisplay'


class CountdownContainer extends Component {

  render() {
    return this.props.isCountdown ?
      <CountdownDisplay value={ this.props.value } /> : null
  }
}

CountdownContainer.propTypes = {
  value: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    value: state.countdownValue,
    isCountdown: state.isCountdown,
  }
}

export default connect(mapStateToProps)(CountdownContainer)
