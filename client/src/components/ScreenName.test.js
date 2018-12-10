import React from 'react';
import { shallow } from 'enzyme';
import ScreenName from './ScreenName';
import 'jest-styled-components';

describe('<ScreenName />', () => {
  it('renders a form with id screenName when the screenName prop is an empty string', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow((<ScreenName sendName={mockCallback} screenName="" />));
    expect(wrapper.find('#screenName').exists()).toBe(true);
  });
  it('renders nothing if screenName is not an empty string', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow((<ScreenName sendName={mockCallback} screenName="pizarro" />));
    expect(wrapper.type()).toEqual(null);
  });
  it('calls the provided function on submit if state.screenName is not an empty string', () => {
    const mockCallback = jest.fn();
    const mockEvent = { preventDefault: () => {} };
    const wrapper = shallow((<ScreenName sendName={mockCallback} screenName="" />));
    wrapper.setState({ screenName: 'pizarro' });
    wrapper.find('#screenName').simulate('submit', mockEvent);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('calls the provided function on submit with the correct argument', () => {
    const mockCallback = jest.fn();
    const mockEvent = { preventDefault: () => {} };
    const wrapper = shallow((<ScreenName sendName={mockCallback} screenName="" />));
    wrapper.setState({ screenName: 'pizarro' });
    wrapper.find('#screenName').simulate('submit', mockEvent);
    expect(mockCallback).toHaveBeenCalledWith('pizarro');
  });
  it('does not call the provided function on submit if state.screenName is an empty string', () => {
    const mockCallback = jest.fn();
    const mockEvent = { preventDefault: () => {} };
    const wrapper = shallow((<ScreenName sendName={mockCallback} screenName="" />));
    wrapper.find('#screenName').simulate('submit', mockEvent);
    expect(mockCallback).toHaveBeenCalledTimes(0);
  });

  it('matches the snapshot', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<ScreenName sendName={mockCallback} screenName="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
