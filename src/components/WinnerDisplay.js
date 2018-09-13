import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MessageContainer } from './MessageDisplay'

const WinnerDisplayH3 = styled.h3`
  color: #6c757d;
`;

const WinnerDisplay = props => {
  return (
    <MessageContainer>
      <WinnerDisplayH3>
        { props.message }
      </WinnerDisplayH3>
    </MessageContainer>
  )
}

WinnerDisplay.propTypes = {
  messages: PropTypes.string.isRequired,
}

export default WinnerDisplay
