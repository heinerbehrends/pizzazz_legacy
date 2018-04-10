import React, { Component } from 'react'
import { connect } from 'react-redux'
import StatusItem from './StatusItem'

class StatusDisplay extends Component {
  render() {
    const moves = this.props.moves;
    const statusUpdates = [];
    if (this.props.moves !== undefined) {
      for (let i = 0; i < moves.length; i++) {
        statusUpdates.push(
          <StatusItem index={i} word={moves[i][0]} key={i}
                      score={moves[i][1]} player={moves[i][3]}/>
        );
      }
    }
    else {
      statusUpdates.push(
        ''
      )
    }
    if (statusUpdates.length > 0) {
      return (
        <div>
          {statusUpdates}
        </div>
      )
    }
    else {
      return ''
    }
  }
}

const mapStateToProps = state => {
  if (state.makeMove.length > 0) {
    return {
      moves: state.makeMove
    }
  }
  else {
    return {}
  }
}

export default connect(mapStateToProps)(StatusDisplay)
