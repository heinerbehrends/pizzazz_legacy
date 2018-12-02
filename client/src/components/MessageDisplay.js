import React from 'react';
import PropTypes from 'prop-types';
import { MessageContainer, Message } from './styled/MessageStyled';

const MessageDisplay = ({ message }) => (
  <MessageContainer>
    <Message>
      {message}
    </Message>
  </MessageContainer>
);


MessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDisplay;
