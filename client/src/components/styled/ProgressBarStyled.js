import styled from 'styled-components';
import {
  white, beige, pink, spacer, shadow,
} from './styleConstants';

export const Container = styled.div`
  position: relative;
  height: 11px;
  background: ${white};
  padding: 4.5px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${spacer};
  box-shadow: ${shadow};
`;

export const Bar = styled.div`
  position: relative;
  background: ${beige};
  height: 100%;
  border-right: solid ${pink} 1px;
  animation-name: status-bar;
  animation-timing-function: linear;
  animation-duration: ${props => props.duration}s;
  @keyframes status-bar {
  from { width: ${props => 100 - props.duration * 2.5}%; }
  to { width: 100%; }
  }
`;
