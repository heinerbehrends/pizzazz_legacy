import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  it('renders 5 children', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.props().children).toHaveLength(5);
  });
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
