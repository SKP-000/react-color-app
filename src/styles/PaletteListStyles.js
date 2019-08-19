import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`;

export const Root = styled.div`
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: visible;
`;

export const Container = styled.div`
  width: 50%;
  padding: .5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Nav = styled.nav`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
    
  }

`;

export const Palettes = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
  padding-bottom: 7.5rem;
`;