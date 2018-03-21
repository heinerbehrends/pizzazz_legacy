import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'
import { compose } from 'redux'

class Letter extends Component {
  render() {
    const { string, index, connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(
              connectDropTarget(
                <img style={{width: 66 + 'px'}}
                src={'images/' + string[index] + '.jpg'}
                alt={string[index]}/>
              )
            )
  }
}

const letterSource = {
  beginDrag(props) {
    return {
      sourceLetter: props.string[props.index],
      sourceIndex: props.index
    }
  },
  endDrag(props, monitor) {
    const { string, index, parent, replaceLetter } = props;
    const { targetLetter, targetIndex, targetParent } = monitor.getDropResult();
    props.dispatch(replaceLetter(string[index], targetParent, targetIndex));
    props.dispatch(replaceLetter(targetLetter, parent, index));
  }
}

const letterTarget = {
  drop(props) {
    const { string, index, parent } = props;
    return {
      targetLetter: string[index],
      targetIndex: index,
      targetParent: parent
    }
  }
}

function dragCollect(connect) {
  return {
    connectDragSource: connect.dragSource()
  }
}

function dropCollect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

export default compose(
  connect(),
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(Letter);
