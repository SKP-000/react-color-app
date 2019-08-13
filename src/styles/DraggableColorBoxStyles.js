import styled from 'styled-components';

export const Root = styled.div`
  height: ${props => props.height ? props.height : '25%'};
  width: 20%;
  background-color: ${props => props.background};
  margin: 0;
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
`;