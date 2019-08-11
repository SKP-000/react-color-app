import styled from 'styled-components';

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

  &:hover {
    cursor: pointer;
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