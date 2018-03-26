import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'
import { compose } from 'redux'
import { updateValidWord } from '../scrabbleLogic/gameLogic'
import { findValidWord, findValidWordWildcard } from '../scrabbleLogic/findWords'
import { wordScoreDict, wordScoreString } from '../Constants'

class Letter extends Component {
  render() {
    const { string, index, connectDragSource, connectDropTarget, showValid } = this.props;
    return connectDragSource(
              connectDropTarget(
                <img style={{width: 66 + 'px'}}
                className={this.props.showValid ? "is-valid" : ""}
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
      sourceIndex: props.index,
    }
  },
  endDrag(props, monitor) {
    if (monitor.didDrop()) {
      const target = monitor.getDropResult();
      const { string, index, parent, replaceLetter, replaceLetterAction } = props;
      const { targetLetter, targetIndex, targetParent, targetString, showValidAction } = target;
      const letter = string[index];

      props.dispatch(replaceLetterAction(letter, targetParent, targetIndex));
      props.dispatch(replaceLetterAction(targetLetter, parent, index));



      if (targetParent === 'validWord' || parent === 'validWord') {
        const word = 0;
        const score = 1;
        const validWordString = updateValidWord(props, target);
        console.log(['validWordString: ', validWordString]);
        if (validWordString.indexOf('8') !== -1) {
          var validWords = findValidWordWildcard(validWordString, wordScoreString);
          if (validWords){
            var longestValidWord = validWords[word];
            var longestValidWordScore = validWords[score];
          }
        }
        else {
          var longestValidWord = findValidWord(validWordString, wordScoreDict)[word];
          var longestValidWordScore = findValidWord(validWordString, wordScoreDict)[score];
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
    const { string, index, parent, showValidAction } = props;
    return {
      targetLetter: string[index],
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
)(Letter);
