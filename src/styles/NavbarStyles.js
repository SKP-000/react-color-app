import styled from 'styled-components';

export const Root = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 8vh;
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

    color: black;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

export const SelectorContainer = styled.div`
  margin-right: 2rem;  
`;