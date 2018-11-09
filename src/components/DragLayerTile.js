import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragLayer } from 'react-dnd'
import ScrabbleTile from './ScrabbleTile'

const layerStyles: React.CSSProperties = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
  maxWidth: '500px',
}


function getPositionStyles(props) {
  const { currentOffset } = props;

  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
    width:'13.68%'
  };
}

class DragLayerTile extends Component {
  render() {
    const { item, isDragging } = this.props;
    const positionStyles = getPositionStyles(this.props)

    if (!isDragging) {
      return null;
    }

    return (
      <div style={ layerStyles }>
        <div style={ positionStyles } >
          <ScrabbleTile letter={ item.sourceLetter } isValid={ false } />
        </div>
      </div>
    );
  }
};

DragLayerTile.propTypes = {
  item: PropTypes.object,
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
})

export default DragLayer(collect)(DragLayerTile);
