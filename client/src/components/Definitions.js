import React from 'react';
import PropTypes from 'prop-types';
import DefinitionsStyled from './styled/DefinitionsStyled';

const Definitions = ({ definition }) => (
  <DefinitionsStyled>
    { definition }
  </DefinitionsStyled>
);

Definitions.propTypes = {
  definition: PropTypes.string.isRequired,
};

export default Definitions;
