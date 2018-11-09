import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const MessageContainer = styled.div`
  margin-bottom:3rem;
  margin-top: 0.5rem;
`;

const MessageDisplaySpan = styled.span`
  font-size: 1rem;
  color: #6c757d;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #dee2e6;
`;

const MessageDisplay = props => (
  <MessageContainer>
    <MessageDisplaySpan>
      { props.message }
    </MessageDisplaySpan>
  </MessageContainer>
);


MessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDisplay;
