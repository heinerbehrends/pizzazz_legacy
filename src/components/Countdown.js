import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';


const Countdown = props => (props.isCountdown ? <ProgressBar /> : null)

Countdown.propTypes = {
  isCountdown: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isCountdown: state.isCountdown,
});

export default connect(mapStateToProps)(Countdown);
