import React from 'react';
import { shallow } from 'enzyme';
import ScrabbleTile from './ScrabbleTile';
import { LetterStyled, NumberSub } from './ScrabbleTileStyled';
import { letterValues } from '../../Constants';

describe('<ScrabbleTile />', () => {
  it('renders the letter in uppercase', () => {
    const wrapper = shallow(<ScrabbleTile isValid={false} letter="e" />);
    expect(wrapper.find(LetterStyled).children().first().text()).toEqual('E');
  });

  it('renders the right letter value for z', () => {
    const wrapper = shallow(<ScrabbleTile isValid={false} letter="z" />);
    expect(wrapper.find(NumberSub).children().first().text()).toEqual(`${letterValues.z}`);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<ScrabbleTile isValid={false} letter="e" />);
    expect(wrapper).toMatchSnapshot();
  });
});
