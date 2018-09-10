import React from 'react'
import styled from 'styled-components'

const MessageDisplayContainer = styled.div`
margin-top: 3rem;
margin-bottom:3rem;
`;

const MessageDisplaySpan = styled.span`
color: #6c757d;
padding: 0.5rem;
border-bottom: 1px solid #dee2e6;
`;

const MessageDisplay = props => {
  return (
    <MessageDisplayContainer>
      <MessageDisplaySpan>
        { props.message }
      </MessageDisplaySpan>
    </MessageDisplayContainer>
  )
};

export default MessageDisplay
