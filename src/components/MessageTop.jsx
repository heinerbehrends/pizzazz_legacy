import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageDisplay from './MessageDisplay';

class MessageTop extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <MessageDisplay message={message} />
    );
  }
}

MessageTop.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  message: state.messageTop,
});

export default connect(mapStateToProps)(MessageTop);
