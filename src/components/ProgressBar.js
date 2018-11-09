import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  position: relative;
  height: 10px;
  background: #fff;
  padding: 3px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const Bar = styled.div`
  position: relative;
  background: #e7ddcf;
  height: 100%;
  border-right: solid #ffc2c0 1px;
  animation-name: status-bar;
  animation-timing-function: linear;
  animation-duration: ${props => props.duration}s;

  @keyframes status-bar {
  from { width: ${props => 100 - props.duration * 2.5}%; }
  to { width: 100%; }
  }
`;

class ProgressBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>
        <Bar duration={ this.props.duration } />
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  duration: state.countdownValue,
});

export default connect(mapStateToProps)(ProgressBar);
