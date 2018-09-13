import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { letterSource, letterTarget } from './DraggableSourceTarget'
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
  validWords: PropTypes.arrayOf(PropTypes.string).isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  validWords: state.gameData.validWords,
})

const dragCollect = connect => ({
  connectDragSource: connect.dragSource()
})

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget()
})

export default compose(
  connect(mapStateToProps),
  DragSource('letter', letterSource, dragCollect),
  DropTarget('letter', letterTarget, dropCollect),
)(DraggableTile);
