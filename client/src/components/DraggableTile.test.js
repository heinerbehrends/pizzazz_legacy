import React from 'react';
import { shallow, mount } from 'enzyme';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import { UnconnectedDraggableTile } from './DraggableTile';
import ScrabbleTile from './ScrabbleTile';

const wrapInTestContext = (DecoratedComponent, props) => (
  DragDropContext(
    TestBackend,
  )(
    () => <DecoratedComponent {...props} />,
  )
);

describe('<DraggableTile />', () => {
  it('renders a ScrabbleTile in a div with width=13.68%', () => {
    const DraggableTile = UnconnectedDraggableTile.DecoratedComponent;
    const mockConnect = el => el;
    const mockEndDrag = jest.fn();
    const wrapper = shallow(
      <DraggableTile
        connectDragSource={mockConnect}
        connectDropTarget={mockConnect}
        letter="p"
        index={0}
        isValid={false}
        isDragging={false}
        endDragAction={mockEndDrag}
        connectDragPreview={mockConnect}
      />,
    );
    expect(wrapper.find(ScrabbleTile).exists()).toBe(true);
    const containerStyle = wrapper.find('div').get(0).props.style;
    expect(containerStyle).toHaveProperty('width', '13.68%');
  });

  it('renders a ScrabbleTile where letter is 0 when isDragging is true', () => {
    const DraggableTile = UnconnectedDraggableTile.DecoratedComponent;
    const mockConnect = el => el;
    const mockEndDrag = jest.fn();
    const wrapper = shallow(
      <DraggableTile
        connectDragSource={mockConnect}
        connectDropTarget={mockConnect}
        letter="p"
        index={0}
        isValid={false}
        isDragging
        endDragAction={mockEndDrag}
        connectDragPreview={mockConnect}
      />,
    );
    expect(wrapper.find(ScrabbleTile).get(0).props).toHaveProperty('letter', '0');
  });

  it('calls the function assigned to endDragAction on endDrag', () => {
    const mockConnect = el => el;
    const mockEndDrag = jest.fn();
    const props = {
      connectDragSource: mockConnect,
      connectDropTarget: mockConnect,
      letter: 'p',
      index: 0,
      isValid: false,
      isDragging: true,
      endDragAction: mockEndDrag,
      connectDragPreview: mockConnect,
    };
    const TestableDraggableTile = wrapInTestContext(UnconnectedDraggableTile, props);
    const wrapper = mount(
      <TestableDraggableTile
        connectDragSource={mockConnect}
        connectDropTarget={mockConnect}
        letter="p"
        index={0}
        isValid={false}
        isDragging
        endDragAction={mockEndDrag}
        connectDragPreview={mockConnect}
      />,
    );
    const backend = wrapper.instance().getManager().getBackend();
    const sourceId = wrapper.find('DragSource(DropTarget(DraggableTile))').instance().getHandlerId();
    const targetId = wrapper.find('DropTarget(DraggableTile)').instance().getHandlerId();
    backend.simulateBeginDrag([sourceId]);
    backend.simulateHover([targetId]);
    backend.simulateDrop();
    backend.simulateEndDrag([sourceId]);
    expect(mockEndDrag).toHaveBeenCalledTimes(1);
  });
});
