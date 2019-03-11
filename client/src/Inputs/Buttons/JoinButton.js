import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const JoinButton = ({ countdownValue, canJoin, joinGame }) => {
    if (countdownValue > 20 && canJoin) {
      return (
        <Button
          value="Join the current game"
          clickHandler={joinGame}
        />
      );
    }
    return null;
  };
  
  JoinButton.propTypes = {
    countdownValue: PropTypes.number.isRequired,
    canJoin: PropTypes.bool.isRequired,
    joinGame: PropTypes.func.isRequired,
  };
  
  export default JoinButton;