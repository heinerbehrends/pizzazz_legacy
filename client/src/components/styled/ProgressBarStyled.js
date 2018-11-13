import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 11px;
  background: #fff;
  padding: 4.5px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.05);
`;

export const Bar = styled.div`
  position: relative;
  background: #e7ddcf;
  height: 100%;
  border-right: solid #ffc2c0 1px;
  animation-name: status-bar;
  animation-timing-function: linear;
  animation-duration: ${props => props.duration}s;
  @keyframes status-bar {
  from { width: ${props => 100 - props.duration * 2.5}%; }
  to { width: 100%; }
  }
`;
