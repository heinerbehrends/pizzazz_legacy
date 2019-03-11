import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DefinitionsStyled from './DefinitionsStyled';

const Definitions = ({ definition }) => (
  <DefinitionsStyled>
    { definition }
  </DefinitionsStyled>
);

Definitions.propTypes = {
  definition: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  definition: state.definition,
})

export default connect(mapStateToProps)(Definitions);
