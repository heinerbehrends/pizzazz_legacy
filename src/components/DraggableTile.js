import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'
import { compose } from 'redux'
import { updateString } from '../scrabbleLogic/gameLogic'
import getIsValidIndex from '../scrabbleLogic/getIsValidIndex'
import { letterValues } from '../Constants'
import ScrabbleTile from './ScrabbleTile'


class DraggableTile extends Component {

  render() {
    const { letter, index, connectDragSource, connectDropTarget, showValid } = this.props;

    return connectDragSource(
              connectDropTarget(
                <div style={{ width: 13.68 + "%" }}>
                  <ScrabbleTile
                    letter={ letter }
                    index={ index }
                    letterValues= { letterValues }
                    isValid = { showValid }
                  />
                </div>
              )
            )
  }
}

const letterSource = {

  beginDrag(props) {
    return {
      sourceLetter: props.letter,
      sourceIndex: props.index,
    }
  },

  endDrag(props, monitor) {
    if (monitor.didDrop()) {

      const target = monitor.getDropResult();
      const { replaceLettersAction, showValidAction, validWords, dispatch } = props;

      const validWord = updateString(props, target, 'validWord');
      const randomLetters = updateString(props, target, 'randomLetters');

      dispatch(replaceLettersAction(randomLetters, validWord));

      if (validWord) {
        const isValidIndex = getIsValidIndex(validWord, validWords);
        dispatch(showValidAction(isValidIndex))
      }
    }
  }
}

const letterTarget = {
  drop(props) {
    const { letter, string, index, parent } = props;
    return {
      targetLetter: letter,
      targetString: string,
      targetIndex: index,
      targetParent: parent,
    }
  }
}

const dragCollect = connect => ({
  connectDragSource: connect.dragSource()
})

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget()
})

const mapStateToProps = state => ({
  validWords: state.gameData.validWords,
})

export default compose(
  connect(mapStateToProps),
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(DraggableTile);
