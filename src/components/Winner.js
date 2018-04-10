import React, { Component } from 'react'
import { connect } from 'react-redux'

class Winner extends Component {
  render() {
    const { player1Score, player2Score } = this.props.game;
    const firstPlayer = this.props.firstPlayer;
    if (player1Score > player2Score) {
      if (firstPlayer) {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1 className="h3 py-5 text-secondary font-weight-light">You win!</h1>
        )
      }
      else {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1 className="h3 py-5 text-secondary font-weight-light">You loose!</h1>
        )
      }
    }
    else if (player1Score === player2Score) {
      return (
        // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
        <h1 className="h3 py-5 text-secondary font-weight-light">It is a draw!</h1>
      )
    }
    else {
      if (! firstPlayer) {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1 className="h3 py-5 text-secondary font-weight-light">You win!</h1>
        )
      }
      else {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1 className="h3 py-5 text-secondary font-weight-light">You loose!</h1>
        )
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    game: state.gameEnd,
    firstPlayer: state.firstPlayer
  }
}

export default connect(mapStateToProps)(Winner);
