import React from 'react'

function StatusItem(props) {
  console.log('yeah');
  return(
    <p key={props.index} className = "text-secondary">
      {((props.player === 'local') ? 'You ' : 'Your Opponent ') +
      'Played ' + props.word + ' For ' + props.score + ' Points'}
    </p>
  )
}

export default StatusItem
