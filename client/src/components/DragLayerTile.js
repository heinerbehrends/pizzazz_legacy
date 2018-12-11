import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import ScrabbleTile from './ScrabbleTile';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  maxWidth: '500px',
};

export const getPositionStyles = ({ currentOffset }) => {
  if (currentOffset) {
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;

    return {
      transform,
      WebkitTransform: transform,
      width: '13.68%',
    };
  }
  return {
    display: 'none',
  };
};

/* eslint react/prefer-stateless-function: off */
class DragLayerTile extends Component {
  render() {
    const { item, isDragging } = this.props;
    const positionStyles = getPositionStyles(this.props);

    if (isDragging) {
      return (
        <div style={layerStyles}>
          <div style={positionStyles}>
            <ScrabbleTile letter={item.sourceLetter} isValid={false} />
          </div>
        </div>
      );
    }
    return null;
  }
}

DragLayerTile.defaultProps = {
  item: null,
  currentOffset: null,
};

DragLayerTile.propTypes = {
  item: PropTypes.shape({
    sourceLetter: PropTypes.string.isRequired,
  }),
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  isDragging: PropTypes.bool.isRequired,
};

const collect = monitor => ({
  item: monitor.getItem(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
});

export default DragLayer(collect)(DragLayerTile);
