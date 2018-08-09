import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'
import { compose } from 'redux'
import { updateValidWord } from '../scrabbleLogic/gameLogic'
import { findValidWord, findValidWordWildcard } from '../scrabbleLogic/findWords'
import { wordScoreDict, wordScoreString, letterValues } from '../Constants'
import ScrabbleTile from './ScrabbleTile'

class DraggableTile extends Component {
  render() {
    const { letter, index, connectDragSource, connectDropTarget, showValid } = this.props;
    return connectDragSource(
              connectDropTarget(
                <div style={{ width: 13 + "%", }}>
                  <ScrabbleTile
                    letter={ letter }
                    index={ index }
                    letterValues= { letterValues }
                    className={showValid ? "is-valid " + "d-inline" : "" + "d-inline"}
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
      const { letter, index, parent, replaceLetterAction } = props;
      const { targetLetter, targetIndex, targetParent, showValidAction } = target;
      props.dispatch(replaceLetterAction(letter, targetParent, targetIndex));
      props.dispatch(replaceLetterAction(targetLetter, parent, index));



      if (targetParent === 'validWord' || parent === 'validWord') {
        const word = 0;
        const validWordString = updateValidWord(props, target);

        if (validWordString.indexOf('8') !== -1) {
          var validWords = findValidWordWildcard(validWordString, wordScoreString);
          if (validWords){
            var longestValidWord = validWords[word];
            // var longestValidWordScore = validWords[score];
          }
        }
        else {
          longestValidWord = findValidWord(validWordString, wordScoreDict)[word];
          // longestValidWordScore = findValidWord(validWordString, wordScoreDict)[score];
        }
        if (longestValidWord) {
          props.dispatch(showValidAction(longestValidWord.length))
        }
        else {
          props.dispatch(showValidAction(0));
        }
      }
    }
  }
}

const letterTarget = {
  drop(props) {
    const { letter, string, index, parent, showValidAction } = props;
    return {
      targetLetter: letter,
      targetString: string,
      targetIndex: index,
      targetParent: parent,
      showValidAction: showValidAction
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
)(DraggableTile);
