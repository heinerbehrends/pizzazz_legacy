import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonStyled';

const Button = ({ clickHandler, value }) => (
  <ButtonStyled
    type="button"
    readOnly
    autoFocus
    onClick={clickHandler}
    value={value}
  />
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
