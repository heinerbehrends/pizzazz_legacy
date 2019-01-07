import styled from 'styled-components';
import { spacer, centerH } from './styleConstants';

const AppWrapper = styled.div`
  ${centerH};
  text-align: center;
  max-width: 500px;
  padding: 6rem 0 ${spacer} 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
`;

export default AppWrapper;
