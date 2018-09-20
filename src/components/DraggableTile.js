import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { letterSource, letterTarget } from './DraggableSourceTarget'
import ScrabbleTile from './ScrabbleTile'


class DraggableTile extends Component {

  componentDidMount() {
		const { connectDragPreview } = this.props
		if (connectDragPreview) {
			// Use empty image as a drag preview so browsers don't draw it
			// and we can draw whatever we want on the custom drag layer instead.
			connectDragPreview(getEmptyImage(), {
				// IE fallback: specify that we'd rather screenshot the node
				// when it already knows it's being dragged so we can hide it with CSS.
				captureDraggingState: true,
			})
    }
  }

  render() {
    const { letter, index, connectDragSource, connectDropTarget, showValid, isDragging } = this.props;

    return connectDragSource(
              connectDropTarget(
                <div style={{ width: 13.68 + "%" }}>
                  <ScrabbleTile
                    letter={ isDragging ? '0' : letter }
                    index={ index }
                    isValid = { showValid }
                  />
                </div>
              )
            )
  }
}

DraggableTile.propTypes = {
  letter: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  showValid: PropTypes.bool.isRequired,
  isDragging: PropTypes.bool,
  validWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  validWords: state.gameData.validWords,
})

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget()
})

export default compose(
  connect(mapStateToProps),
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(DraggableTile);
