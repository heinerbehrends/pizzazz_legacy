import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MessageContainer, MessageStyled } from './MessageStyled';

const Message = ({ message }) => (
  <MessageContainer>
    <MessageStyled>
      {message}
    </MessageStyled>
  </MessageContainer>
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
