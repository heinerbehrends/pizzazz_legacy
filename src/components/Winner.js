import React, { Component } from 'react'
import { connect } from 'react-redux'

class Winner extends Component {
  render() {
    const { player1Score, player2Score } = this.props.game;
    const firstPlayer = this.props.firstPlayer;
    console.log(firstPlayer);
    if (player1Score > player2Score) {
      if (firstPlayer) {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1>You win!</h1>
        )
      }
      else {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1>You loose!</h1>
        )
      }
    }
    else if (player1Score === player2Score) {
      return (
        // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
        <h1 className="lead pt-5">It is a draw</h1>
      )
    }
    else {
      if (! firstPlayer) {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1 className="lead pt-5">You win!</h1>
        )
      }
      else {
        return (
          // <p className="lead">{ 'Your opponent played ' + otherSolution ' for ' + otherScore + ' points' }</p>
          <h1 className="lead pt-5">You loose!</h1>
        )
      }
    }
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    game: state.gameEnd,
    firstPlayer: state.firstPlayer
  }
}

export default connect(mapStateToProps)(Winner);
