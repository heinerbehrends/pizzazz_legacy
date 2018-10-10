import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MessageDisplay from './MessageDisplay'
import { getScore } from '../scrabbleLogic/gameLogic'

class GameInterfaceTop extends Component {
  render() {
    return (
      <MessageDisplay message= { this.props.message } />
    )
  }
}

GameInterfaceTop.propTypes = {
  message: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    message: state.messageTop,
  }
}

export default connect(mapStateToProps)(GameInterfaceTop)
