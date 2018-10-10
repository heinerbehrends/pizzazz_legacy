import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const MessageContainer = styled.div`
  margin-top: 3rem;
  margin-bottom:3rem;
`

const MessageDisplaySpan = styled.span`
  color: #6c757d;
  padding: 0.5rem;
  border-bottom: 1px solid #dee2e6;
`

const MessageDisplay = props => {
  return (
    <MessageContainer>
      <MessageDisplaySpan>
        { props.message }
      </MessageDisplaySpan>
    </MessageContainer>
  )
}

MessageDisplay.propTypes  = {
  message: PropTypes.string
}

export default MessageDisplay
