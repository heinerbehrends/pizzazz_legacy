import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container, Bar } from './styled/ProgressBarStyled';

class BarWrapper extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { duration } = this.props;
    return (
      <Container>
        <Bar duration={duration} />
      </Container>
    );
  }
}

BarWrapper.propTypes = {
  duration: PropTypes.number.isRequired,
};

/* eslint react/destructuring-assignment: off */
const ProgressBar = props => (
  props.isCountdown
    ? <BarWrapper duration={props.duration} />
    : null
);

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  duration: state.countdownValue,
  isCountdown: state.isCountdown,
});

export default connect(mapStateToProps)(ProgressBar);
