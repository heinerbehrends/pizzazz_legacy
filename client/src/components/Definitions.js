import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as style from './styled/styleConstants';

const DefinitionsStyled = styled.div`
  text-align: left;
  font-style: italic;
  font-weight: 200;
  margin-left: 3vw;
  font-size: ${style.respText};
  color: ${style.textColor};
  border-left:${style.border};
  padding: ${style.respPad};
  @media screen and (min-width: 445px) {
    padding: ${style.padding};
    margin-left: 1rem;
    font-size: ${style.textSize};
  };
`;

const Definitions = ({ definition }) => (
  definition
    ? (
      <DefinitionsStyled>
        { definition }
      </DefinitionsStyled>
    )
    : null
);

Definitions.propTypes = {
  definition: PropTypes.string.isRequired,
};

export default Definitions;
