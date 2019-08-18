import styled from 'styled-components';
import chroma from 'chroma-js';

export const TextContent = styled.div`
  display: inline-block;
`;

export const Root = styled.div`
  height: ${props => props.height ? props.height : '25%'};
  width: 20%;
  margin: 0;
  margin-top: -.8vh;
  display: flex;
  flex-grow: 1;
  position: relative;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  text-transform: uppercase;

  &:hover .delete-icon {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

export const ColorBox = styled.div`
  background-color: ${props => props.background};
  height: 100%;
  width: 100%;
`;

export const BoxContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #f0ffff;
  font-weight: 400;
  font-size: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .2rem .5rem;
  font-family: "Montserrat", serif;

  ${TextContent} {
    width: 69%;
  }

  span {
    color: ${props => chroma.contrast(props.background, "black") > 6 ? '#000' : 'inherit'}
  }

  .delete-icon {
    transform: scale(.8);
    color: rgba(0, 0, 0, .5);
    transition: all .2s;
  }

`;