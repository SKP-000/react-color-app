import styled, { createGlobalStyle } from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import sizes from './sizes';
import bg from './svg-back.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    /* background by SVGBackgrounds.com */
    background-color: #387eaa;
    background-image: url(${bg});
  }
`;

export const Root = styled.div`
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  position: relative;


  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 500ms, transform 300ms;
  }
`;

export const Container = styled.div`
  width: 50%;
  padding: .5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;

  ${sizes.down('xl')} {
    width: 80%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #fff;

  a {
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 7px;

    &:hover {
      text-decoration: underline;
    }
    
  }

  h1 {
    font-family: inherit;
  }

  ${sizes.down('xs')} {
    white-space: nowrap;
    font-size: 15px;

    h1 {
      font-size: 15px;
    }
  }

`;

export const Palettes = styled(TransitionGroup)`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 1.5rem;

  ${sizes.down('xs')} {
    grid-template-columns: repeat(1, 100%);
    padding-bottom: 7.5rem;
  }
`;