/* eslint no-shadow: off */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { compose } from 'redux';
import ScrabbleTile from './ScrabbleTile';
import { endDragAction } from '../actions/actionCreators';


class DraggableTile extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props;
    connectDragPreview(
      getEmptyImage(),
      { captureDraggingState: true },
    );
  }

  render() {
    const {
      letter,
      index,
      connectDragSource,
      connectDropTarget,
      isValid,
      isDragging,
    } = this.props;

    return connectDragSource(
      connectDropTarget(
        <div style={{ width: '13.68%' }}>
          <ScrabbleTile
            letter={isDragging ? '0' : letter}
            index={index}
            isValid={isValid}
          />
        </div>,
      ),
    );
  }
}

const letterSource = {
  beginDrag({ letter, index }) {
    return {
      sourceLetter: letter,
    };
  },
  endDrag(props, monitor) {
    if (monitor.didDrop()) {
      const target = monitor.getDropResult();
      const { endDragAction } = props;
      endDragAction(props, target);
    }
  },
};

const letterTarget = {
  drop({
    string,
    index,
    parent,
  }) {
    return {
      targetString: string,
      targetIndex: index,
      targetParent: parent,
    };
  },
};

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});
const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

DraggableTile.propTypes = {
  letter: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
  isDragging: PropTypes.bool.isRequired,
  endDragAction: PropTypes.func.isRequired, // eslint-disable-line
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  endDragAction: (props, target) => dispatch(endDragAction(props, target)),
});

export default compose(
  connect(null, mapDispatchToProps),
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(DraggableTile);

export const UnconnectedDraggableTile = compose(
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(DraggableTile);
