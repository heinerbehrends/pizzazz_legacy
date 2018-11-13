import React from 'react';
import PropTypes from 'prop-types';
import { MessageContainer, Message } from './styled/MessageStyled';

/* eslint react/destructuring-assignment: off */
const MessageDisplay = props => (
  <MessageContainer>
    <Message>
      { props.message }
    </Message>
  </MessageContainer>
);


MessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDisplay;
