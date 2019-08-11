import styled from 'styled-components';

export const Root = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

// Palette div contains all the colors of that palette
export const PaletteColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  height: fit-content;

  height: 85%; /* Translates to 85vh */
`;