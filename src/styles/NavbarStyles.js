import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10%) translateY(125%);
  }

  100% {
    opacity: 1;
    transform: translateX(-10%) translateY(0%);
  }
`;

export const Root = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 8vh;
  align-content: flex-start;
`;

export const Logo = styled.div`
  display: inline-block;
  background-color: #eceff1;
  font-size: 22px;
  margin-right: auto;
  padding: 0 13px;
  font-family: Roboto;
  align-self: stretch;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const LogoLink = styled.a`
  &:active, &:focus, &:link {
    text-decoration: none;
    color: black;
  }
`;

export const SliderContainer = styled.div`
  width: 340px;
  display: inline-block;
  margin: 0 10px;

  display: flex;
  align-items: center;
  margin-right: auto;

  h1 {
    font-size: 25px;
    white-space: nowrap;
    margin-right: 2rem;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 300;
  }

  .rc-slider-rail {
    height: 8px;
  }

  .rc-slider-track {
    background-color: transparent;
  }

  .rc-slider-handle,
  .rc-slider-handle:active,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover {
    background-color: #0672ee;
    outline: none;
    border: 2px solid #0672ee;
    box-shadow: none;
    width: 13px;
    height: 13px;
    margin-left: -7px;
    margin-top: -3px;
  }

`;

export const SelectorContainer = styled.div`
  margin-right: 2rem;
  
  .select {
    width: 20rem;
    text-align: center;
    font-weight: 300;
  }

`;

export const SnackbarContainer = styled.div`
  position: absolute;
  bottom: 3.5%;
  right: 2.5%;

  .snackbar {
    transform: translateX(-10%) translateY(0%);
    animation: ${fadeIn} .7s;

    .message {
      text-transform: uppercase;
      color: #929292;

      .colortext {
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
      }

    }

    .close {
      color: #fff;
    }

  }

`;