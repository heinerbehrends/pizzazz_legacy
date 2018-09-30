import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 10px;
  background: #fff;
  padding: 3px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const Bar = styled.div`
  position: relative;
  background: #ddd;
  height: 100%;
  border-right: solid red 1px;
  animation-name: status-bar;
  animation-timing-function: linear;
  animation-duration: 40s;

  @keyframes status-bar {
  from { width: 0%; border-color: green }
  to { width: 100%; border-color: red }
  }
`
const ProgressBar = () => (
  <Container>
    <Bar />
  </Container>
)

export default ProgressBar
