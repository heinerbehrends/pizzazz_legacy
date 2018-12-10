import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import LetterRow from './LetterRow';
import DraggableTile from './DraggableTile';
import ScrabbleTile from './ScrabbleTile';

describe('<LetterRow />', () => {
  it('renders ScrabbleTiles if isDraggable props is false', () => {
    const wrapper = shallow(
      (<LetterRow
        isDraggable={false}
        letters="pizzazz"
        parent="randomLetters"
        isValidIndex={7}
      />),
    );
    expect(wrapper.find(ScrabbleTile)).toHaveLength(7);
  });
  it('renders DraggableTiles if isDraggable props is true', () => {
    const wrapper = shallow(
      (<LetterRow
        isDraggable
        letters="pizzazz"
        parent="randomLetters"
        isValidIndex={7}
      />),
    );
    expect(wrapper.find(DraggableTile)).toHaveLength(7);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(
      (<LetterRow
        isDraggable
        letters="pizzazz"
        parent="randomLetters"
        isValidIndex={7}
      />),
    );
    expect(wrapper).toMatchSnapshot();
  });
});
