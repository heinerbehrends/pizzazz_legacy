import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageDisplay from './MessageDisplay';

const Message = props => (
  <MessageDisplay message={props.message} /> // eslint-disable-line react/destructuring-assignment
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  message: state.messageTop,
  countdownValue: state.countdownValue,
  canJoin: state.canJoin,
});

export default connect(mapStateToProps)(Message);
