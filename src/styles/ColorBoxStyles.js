import chroma from 'chroma-js';
import styled, { keyframes, css } from 'styled-components';
import sizes from './sizes';

// TODO: GIVE GO BACK BUTTON THE BACKGROUND IMAGE OF THE LANDING PAGE OF THE APP

// EXPORTS:
// CopyButton
// Root
// ButtonContainer
// GoBack
// BoxContent
// SeeMore
// CopyOverlay
// CopyMsg

export const bobright = keyframes`
  0% {
  }

  50% {
    transform: translateX(1px);
  }

  100% {
    transform: translateX(0px)
  }
`;

const bobleft = keyframes`
  0% {

  }

  50% {
    transform: translateX(-2px);
  }

  100% {
    transform: translateX(0px)
  }
`

const popout = keyframes`
  from {
    opacity: 0;
    transform: scale(.1);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  outline: 0;
  background-color: rgba(255, 255, 255, .1);
  border: 2px solid rgba(229, 241, 241, .15);
  padding: .3rem .6rem;
  border-radius: 5px;
  font-family: inherit;
  cursor: pointer;
  text-transform: inherit;
  box-shadow: 3px 2px 6px rgba(0, 0, 0, .1);

  color: #fff;
  text-shadow: 1px 1px black;
  font-weight: 700;
  font-size: 1.1rem;

  opacity: 0;
  transition: all .5s;

  .left-arrow {
    margin-right: 7px;
    margin-bottom: 4px;
  }

  ${sizes.down('xs')} {
    font-size: .8rem;
    padding: .1rem .2rem;
  }

`;

export const Root = styled.div`
  height: ${props => props.height ? props.height : '25%'};
  width: 20%;
  ${sizes.down('lg')} {
    width: 50%;
    height: ${props => props.height ? props.height : '20%'}
  }
  ${sizes.down('md')} {
    height: ${props => props.height ? props.height : '10%'};
    width: 50%;
  }
  ${sizes.down('xs')} {
    width: 100%;
    height: ${props => props.height ? props.height : '5%'};
  }
  background: ${props => props.background};
  margin: 0;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;

  transition: all .3s;

  &:hover ${CopyButton} {
    opacity: 1;
  }

`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
`;

export const GoBack = styled.div`
  display: inline-block;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;

  ${CopyButton}, ${CopyButton}:active {
    border: 0;
    outline: 0;
    opacity: 1;
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border: 2px solid rgba(229, 241, 241, .15);
    font-size: 1.2rem;
    padding: .5rem 1.5rem;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;

    ${sizes.down('xs')} {
      font-size: .8rem;
      padding: .1rem .2rem;
    }

    transition: all .3s;
  }

  &:hover ${CopyButton} .left-arrow {
    animation: ${bobleft} .4s infinite;
    transition: all .5s;
  }
`;

export const BoxContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: #f0ffff;
  font-weight: 400;
  font-size: 15px;
  width: 69%;

  transform: translateX(5px) translateY(-5px);

  span {
    color: ${props => chroma.contrast(props.background, "black") > 6 ? '#000' : 'inherit'}
  }

  ${sizes.down('xs')} {
    width: fit-content;
    font-size: 12px;
  }
  
`;

export const SeeMore = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, .5);
  border-top: none;
  border-right: none;
  padding: 3px 8px;
  transition: animation .3s;
  font-size: .8rem;
  border-top-left-radius: 5px;

  color: #202020;

  &:hover {
    animation: ${bobright} .5s infinite;
  }

  ${sizes.down('xs')} {
    height: 100%;
    border-radius: 0;
  }

`;

export const CopyOverlay = styled.div`
  position: absolute;
  
  ${props => props.copied ?
  css`
    opacity: 1;
    visibility: visible;
    z-index: 10;
    transform: scale(50);
  ` :
  css`
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    transform: scale(.1);
  `
  };

  background: ${props => props.color};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 1.5s;
`;

export const CopyMsg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 3rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;

  ${props => props.copied ?
  css`
    display: auto;
    visiblity: visible;
    animation-play-state: running;
  ` :
  css`
    display: none;
    visibility: hidden;
    animation-play-state: paused;
  `
  };

  transform: scale(0);
  animation: ${popout} 1.4s cubic-bezier(0,1,0,1);
  animation-delay: .1s;

  h1 {
    font-size: 7rem;
    font-weight: 700;
    text-shadow: 1px 2px black;
    background-color: rgba(255,255,255,.2);
    width: 100%;
    text-align: center;

    margin-bottom: 2rem;
    padding: 1rem;

    ${sizes.down('xs')} {
      font-size: 3.5rem;
    }
  }

  h2 {
    text-transform: lowercase;
    text-shadow: 1px 2px black;
    font-size: 2.3rem;
    font-weight: 300;

    ${sizes.down('xs')} {
      font-size: 1.2rem;
      text-shadow: .5px .75px black;
    }
  }

`;