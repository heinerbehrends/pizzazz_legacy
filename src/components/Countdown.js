import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import { Svg, Circle, NumberDisplay, Container } from './styled/CountdownStyled'


class Countdown extends Component {

  render() {

    return this.props.isCountdown ?
      <ProgressBar /> : null
      //   <NumberDisplay>{ this.props.value }</NumberDisplay>
      //   <Svg>
      //     <Circle />
      //   </Svg>
      // </Container> : null
  }
}

Countdown.propTypes = {
  value: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    value: state.countdownValue,
    isCountdown: state.isCountdown,
  }
}

export default connect(mapStateToProps)(Countdown)
