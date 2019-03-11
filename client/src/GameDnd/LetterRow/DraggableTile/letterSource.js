export const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

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

export default letterSource;
