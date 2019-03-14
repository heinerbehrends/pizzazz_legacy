import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer, Form, FormGroup, HiddenLabel, ButtonForm, TextInput,
} from './ScreenNameStyled';

const ScreenName = ({ sendName, screenName }) => {
  const [input, setInput] = useState('');

  const handleChange = ({ target: { value } }) => setInput(value);

  const sendScreenName = (event) => {
    event.preventDefault();
    if (!input) {
      return;
    }
    sendName(input);
  };

  return (
    screenName.length ? null : (
      <FormContainer>
        <Form
          id="screenName"
          name="screenName"
          autoComplete="off"
          onSubmit={sendScreenName}
        >
          <HiddenLabel htmlFor="enter-screen-name">Enter screen name</HiddenLabel>
          <FormGroup>
            <TextInput
              placeholder="Enter screen name to start"
              onChange={handleChange}
              type="text"
              id="enter-screen-name"
              name="screenName"
              autoFocus
            />
            <ButtonForm type="submit" value="Go" />
          </FormGroup>
        </Form>
      </FormContainer>
    )
  );
};

ScreenName.propTypes = {
  sendName: PropTypes.func.isRequired,
  screenName: PropTypes.string.isRequired,
};

export default ScreenName;
