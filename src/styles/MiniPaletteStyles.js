import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;

  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover .deleteIcon {
    opacity: 1;
    transform: translateX(0);
  }

`;

export const Colors = styled.div`
  height: 110px;
  width: 100%;

  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h5`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-size: 1rem;
  padding-top: 0.5rem;
  position: relative;

  /* Styling for Emoji */
  span {
    font-size: 1.2rem;
  }

`;

export const MiniColor = styled.div`
  width: 20%;
  height: 25%;
  display: inline-block;
  margin: 0;
  position: relative;
  margin-bottom: -3.5px;
`;

export const Delete = styled.div`
  /*height: 18%;
  width: 15%;*/
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  .deleteIcon {
    color: white;
    background-color: #eb3d30;
    height: 30px;
    width: 30px;
    padding: 5px;
    opacity: 0;
    transform: translateX(20px);
    transition: all .3s ease-in-out;
    border-bottom-left-radius: 5px;
  }

  ${props => props.deleted && css`display: none`}

`;