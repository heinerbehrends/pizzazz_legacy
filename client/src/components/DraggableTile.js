/* eslint no-shadow: off */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { compose } from 'redux';
import { letterSource, letterTarget } from '../clientLogic/LetterSourceTarget';
import ScrabbleTile from './ScrabbleTile';


class DraggableTile extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props;
    if (connectDragPreview) {
      connectDragPreview(getEmptyImage(), {
        captureDraggingState: true,
      });
    }
  }

  render() {
    const {
      letter,
      index,
      connectDragSource,
      connectDropTarget,
      isValidIndex,
      isDragging,
    } = this.props;

    return connectDragSource(
      connectDropTarget(
        <div style={{ width: '13.68%' }}>
          <ScrabbleTile
            letter={isDragging ? '0' : letter}
            index={index}
            isValid={isValidIndex}
          />
        </div>,
      ),
    );
  }
}

DraggableTile.propTypes = {
  letter: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isValidIndex: PropTypes.bool.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  validWords: state.gameData.validWords,
});

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

export default compose(
  connect(mapStateToProps),
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(DraggableTile);
