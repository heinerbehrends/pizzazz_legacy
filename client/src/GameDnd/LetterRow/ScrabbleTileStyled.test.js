import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { LetterStyled } from './ScrabbleTileStyled';
import { green, yellow, letterColor } from '../../styleConstants';

describe('<ScrabbleTileStyled />', () => {
  it('renders a dark gray letter when the letter is not 8 or 0', () => {
    const wrapper = renderer.create(<LetterStyled letter="p" isValid={false} />).toJSON();
    expect(wrapper).toHaveStyleRule('color', letterColor);
  });
  it('renders an invisible letter when the letter is 8', () => {
    const wrapper = renderer.create(<LetterStyled letter="8" isValid={false} />).toJSON();
    expect(wrapper).toHaveStyleRule('color', 'rgba(0,0,0,0)');
  });
  it('renders an invisible div when the letter is 0', () => {
    const wrapper = renderer.create(<LetterStyled letter="0" isValid={false} />).toJSON();
    expect(wrapper).toHaveStyleRule('opacity', '0');
  });
  it('renders a yellow background when isValid is false', () => {
    const wrapper = renderer.create(<LetterStyled letter="8" isValid={false} />).toJSON();
    expect(wrapper).toHaveStyleRule('background-color', yellow);
  });
  it('renders a green background when isValid is true', () => {
    const wrapper = renderer.create(<LetterStyled letter="8" isValid={true} />).toJSON();
    expect(wrapper).toHaveStyleRule('background-color', green);
  });

  // snapshot tests
  it('matches the snapshot', () => {
    const wrapper = shallow(<LetterStyled letter="e" isValid={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
