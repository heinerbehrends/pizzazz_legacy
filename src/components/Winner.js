import React, { Component } from 'react'
import { connect } from 'react-redux'

class Winner extends Component {
  render() {
    const { player1Score, player2Score } = this.props.game;
    const firstPlayer = this.props.firstPlayer;

    if (player1Score > player2Score) {
      if (firstPlayer) {
        return (
          <div className="my-5">
            <h3 className="text-secondary font-weight-light">You win!</h3>
          </div>
        )
      }
      else {
        return (
          <div className="my-5">
            <h3 className="text-secondary font-weight-light">You lose!</h3>
          </div>
        )
      }
    }
    else if (player1Score === player2Score) {
      return (
        <div className="my-5">
          <h3 className="text-secondary font-weight-light">{ "It's a draw!" }</h3>
        </div>
      )
    }
    else {
      if (! firstPlayer) {
        return (
          <div className="my-5">
            <h3 className="text-secondary font-weight-light">You win!</h3>
          </div>
        )
      }
      else {
        return (
          <div className="my-5">
            <h3 className="text-secondary font-weight-light">You lose!</h3>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    game: state.gameData,
    firstPlayer: state.firstPlayer
  }
}

export default connect(mapStateToProps)(Winner);
