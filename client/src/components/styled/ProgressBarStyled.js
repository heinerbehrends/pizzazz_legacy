import styled from 'styled-components';
import { gameDuration } from '../../Constants';
import {
  white, beige, pink, shadow, centerH, bottomSpacer,
} from './styleConstants';

export const Container = styled.div`
  ${bottomSpacer};
  margin: 0 4.5px 0 4.5px;
  position: relative;
  height: 11px;
  background: ${white};
  padding: 4.5px;
  box-shadow: ${shadow};
  @media screen and (min-width: 501px) {
    ${centerH};
    margin-top: 0.5rem;
  };
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
    from { width: ${props => 100 - (props.duration / gameDuration) * 100}%; }
    to { width: 100%; }
  }
`;
