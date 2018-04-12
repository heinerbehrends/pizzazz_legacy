import React, { Component } from 'react'
import { connect } from 'react-redux'

class Winner extends Component {
  render() {
    const { player1Score, player2Score, player1Solution, player2Solution } = this.props.game;
    const firstPlayer = this.props.firstPlayer;

    if (player1Score > player2Score) {
      if (firstPlayer) {
        return (
          <div>
            <h1 className="h3 py-5 text-secondary font-weight-light">You win!</h1>
            <p className="text-secondary">{ 'Your Opponent Played ' + player2Solution + ' For ' + player2Score + ' Points' }</p>
          </div>
        )
      }
      else {
        return (
          <div>
            <h1 className="h3 py-5 text-secondary font-weight-light">You lose!</h1>
            <p className="text-secondary">{ 'Your Opponent Played ' + player1Solution + ' For ' + player1Score + ' Points' }</p>
          </div>
        )
      }
    }
    else if (player1Score === player2Score) {
      return (
        <div>
          <h1 className="h3 py-5 text-secondary font-weight-light">It is a draw!</h1>
          <p className="text-secondary">
            { 'Your Opponent Played ' +
            (firstPlayer ? player2Solution : player1Solution) + ' For ' +
            (firstPlayer ? player2Score : player1Score) + ' Points' }
          </p>
        </div>
      )
    }
    else {
      if (! firstPlayer) {
        return (
          <div>
            <h1 className="h3 py-5 text-secondary font-weight-light">You win!</h1>
            <p className="text-secondary">{ 'Your Opponent Played ' + player1Solution + ' For ' + player1Score + ' Points' }</p>
          </div>
        )
      }
      else {
        return (
          <div>
            <h1 className="h3 py-5 text-secondary font-weight-light">You lose!</h1>
            <p className="text-secondary">{ 'Your Opponent Played ' + player2Solution + ' For ' + player2Score + ' Points' }</p>
          </div>
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
