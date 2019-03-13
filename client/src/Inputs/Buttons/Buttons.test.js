import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from './Button';
import JoinButton from './JoinButton';
import SolutionButton from './SolutionButton';

describe('<Button />', () => {
  it('calls the clickHandler function on click', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow((<Button clickHandler={mockCallback} value="Go" />));
    wrapper.dive().find('StyledComponent').simulate('click');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('matches the snapshot', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Button clickHandler={mockCallback} value="Go" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<JoinButton>', () => {
  it('renders a <Button /> if canJoin is true and countdownValue > 20', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin
        joinGame={mockCallback}
      />
    ));
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('renders a button with the right value when canJoin is true and countdownValue > 20', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin
        joinGame={mockCallback}
      />
    ));
    expect(wrapper.dive().props().value).toEqual('Join the current game');
  });

  it('renders nothing if canJoin is false', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin={false}
        joinGame={mockCallback}
      />
    ));
    expect(wrapper.type()).toEqual(null);
  });

  it('renders nothing if countdownValue <= 20', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <JoinButton
        countdownValue={20}
        canJoin
        joinGame={mockCallback}
      />
    ));
    expect(wrapper.type()).toEqual(null);
  });

  it('matches the snapshot', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin
        joinGame={mockCallback}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<SolutionButton />', () => {
  it('renders a <Button /> with the valid word and its score', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <SolutionButton
        isValidIndex={7}
        scrabbleBoard="pizzazz"
        sendSolution={mockCallback}
      />
    ));
    const wrapper2 = shallow((
      <SolutionButton
        isValidIndex={5}
        scrabbleBoard="pizza00"
        sendSolution={mockCallback}
      />
    ));
    expect(wrapper.dive().props().value).toEqual('Play PIZZAZZ for 46 points');
    expect(wrapper2.dive().props().value).toEqual('Play PIZZA for 26 points');
  });

  it('does not render a <Button /> when isValidIndex is zero', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <SolutionButton
        isValidIndex={0}
        scrabbleBoard="pizarro"
        sendSolution={mockCallback}
      />
    ));
    expect(wrapper.find(Button).exists()).toEqual(false);
  });

  it('matches the snapshot', () => {
    const mockCallback = el => el;
    const wrapper = shallow((
      <SolutionButton
        isValidIndex={7}
        scrabbleBoard="pizzazz"
        sendSolution={mockCallback}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
