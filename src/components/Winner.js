import React from 'react'
import PropTypes from 'prop-types'
import WinnerDisplay from './WinnerDisplay'


const Winner = props => {

  const { player1Score, player2Score } = props.game;
  const firstPlayer = props.firstPlayer;

  const isFirstPlayerWinner = player1Score > player2Score;
  const isWinner = (isFirstPlayerWinner && firstPlayer) || (!isFirstPlayerWinner && !firstPlayer);
  let message = '';

  if (player1Score === player2Score) {
    message = "It's a draw!";
  }
  else if (isWinner) {
    message = "You win!";
  }
  else {
    message = "You loose!";
  }

  return (
    <WinnerDisplay message={ message } />
  )
}

Winner.propTypes = {
  game: PropTypes.object.isRequired,
  firstPlayer: PropTypes.bool.isRequired,
}

export default Winner;
