import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Container, Bar } from './styled/ProgressBarStyled';

class ProgressBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { duration, isCountdown } = this.props;
    console.log(isCountdown);
    return isCountdown
      ? (
        <Container>
          <Bar duration={duration} />
        </Container>
      ) : null;
  }
}

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  duration: state.countdownValue,
  isCountdown: state.isCountdown,
});

export default connect(mapStateToProps)(ProgressBar);
