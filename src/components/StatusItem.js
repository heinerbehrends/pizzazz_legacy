import React from 'react'

function StatusItem(props) {
  return(
    <p key={props.index} className = "text-secondary">
      {((props.player === 'local') ? 'You ' : 'Your Opponent ') +
      'Played ' + props.word + ' For ' + props.score + ' Points'}
    </p>
  )
}

export default StatusItem
