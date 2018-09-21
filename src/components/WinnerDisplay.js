import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MessageContainer } from './MessageDisplay'

const WinnerDisplayH3 = styled.h3`
  color: #6c757d;
  font-size: 1.5rem;
  font-weight: 400;
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
  message: PropTypes.string.isRequired,
}

export default WinnerDisplay
