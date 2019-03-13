import React from 'react';
import { shallow } from 'enzyme';
import DragLayerTile, { getPositionStyles } from './DragLayerTile';
import ScrabbleTile from './LetterRow/ScrabbleTile';

describe('<DragLayerTile />', () => {
  it('renders one ScrabbleTile', () => {
    const UndecoratedDragLayerTile = DragLayerTile.DecoratedComponent;
    const wrapper = shallow(
      <UndecoratedDragLayerTile
        item={{ sourceLetter: 'p' }}
        isDragging
      />,
    );
    expect(wrapper.find(ScrabbleTile)).toHaveLength(1);
  });

  it('returns null if isDragging is false', () => {
    const UndecoratedDragLayerTile = DragLayerTile.DecoratedComponent;
    const wrapper = shallow(
      <UndecoratedDragLayerTile
        item={{ sourceLetter: 'p' }}
        isDragging={false}
      />,
    );
    expect(wrapper.type()).toEqual(null);
  });
});

describe('getPositionStyles', () => {
  it('returns the expected style object if currentOffset is truthy', () => {
    const expectedStyle = {
      transform: 'translate(42px, 23px)',
      WebkitTransform: 'translate(42px, 23px)',
      width: '13.68%',
    };
    expect(getPositionStyles({ currentOffset: { x: 42, y: 23 } })).toEqual(expectedStyle);
  });
});
