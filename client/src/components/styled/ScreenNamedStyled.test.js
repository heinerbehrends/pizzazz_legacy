import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { TextInput } from './ScreenNameStyled';

describe('<TextInput />', () => {
  it('calls the onChange function when the user types', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow((<TextInput onChange={mockCallback} />));
    wrapper.find('StyledComponent').simulate('change');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
