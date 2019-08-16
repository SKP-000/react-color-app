import styled from 'styled-components';

export const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

// Palette div contains all the colors of that palette
export const PaletteColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;

  height: 85%; /* Translates to 85vh */
`;