import React from 'react';
import { shallow } from 'enzyme';
import { Button, JoinButton, SolutionButton } from './Buttons';
import 'jest-styled-components';

describe('<Button />', () => {
  it('calls the clickHandler function on click', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((<Button clickHandler={mockCallBack} value="Go" />));
    wrapper.dive().find('StyledComponent').simulate('click');
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
  it('matches the snapshot', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button clickHandler={mockCallBack} value="Go" />);
    expect(wrapper).toMatchSnapshot();
  })
});

describe('<JoinButton>', () => {
  it('renders a <Button /> if canJoin is true and countdownValue > 20', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin={true}
        joinGame={mockCallBack}
      />
    ));
    expect(wrapper.find(Button).exists()).toEqual(true);
  });
  it('renders a button with value Join the current game', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin={true}
        joinGame={mockCallBack}
        />
    ));
    expect(wrapper.dive().props().value).toEqual('Join the current game');
  })
  it('does not render a <Button /> if canJoin is false', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin={false}
        joinGame={mockCallBack}
      />
    ));
    expect(wrapper.find(Button).exists()).toEqual(false);
  })
  it('does not render a <Button /> if countdownValue <= 20', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <JoinButton
        countdownValue={20}
        canJoin={true}
        joinGame={mockCallBack}
      />
    ));
    expect(wrapper.find(Button).exists()).toEqual(false);
  })

  it('matches the snapshot', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <JoinButton
        countdownValue={21}
        canJoin={true}
        joinGame={mockCallBack}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  })
})

describe('<SolutionButton />', () => {
  it('renders a <Button /> with the valid word and its score', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <SolutionButton
        isValidIndex={7}
        scrabbleBoard="pizzazz"
        sendSolution={mockCallBack}
      />
    ));
    const wrapper2 = shallow((
      <SolutionButton
        isValidIndex={5}
        scrabbleBoard="pizza00"
        sendSolution={mockCallBack}
      />
    ));
    expect(wrapper.dive().props().value).toEqual('Play PIZZAZZ for 46 points');
    expect(wrapper2.dive().props().value).toEqual('Play PIZZA for 26 points');
  })
  it('does not render a <Button /> when validIndex is zero', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow((
      <SolutionButton
        isValidIndex={0}
        scrabbleBoard="pizarro"
        sendSolution={mockCallBack}
      />
    ));
    expect(wrapper.find(Button).exists()).toEqual(false);
  })
})
