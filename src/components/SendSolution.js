import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endGameAction } from '../actions'

class SendSolution extends Component {
  render() {
    console.log(this.props);
    return (
      <button className = "btn btn-outline-secondary mb-5 mt-3"
      // firstPlayer={ this.props.firstPlayer } makeMove={ this.props.makeMove }
      onClick={ () => this.props.endGame(this.props.firstPlayer, this.props.makeMove) } >
      End Game
      </button>
    )
  }
}

const mapStateToProps = state => {
  return {
    firstPlayer: state.firstPlayer,
    makeMove: state.makeMove,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endGame: (firstPlayer, makeMove) => dispatch(endGameAction(firstPlayer, makeMove))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SendSolution)
