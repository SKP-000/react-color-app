import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import styled from 'styled-components';
import './ColorBox.css';

const Root = styled.div`
  height: ${props => props.height ? props.height : '25%'};
  width: 20%;
  background: ${props => props.background};
  margin: 0;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;

  transition: all .3s;

  &:hover .copy-button {
    opacity: 1;
  }

`;

const GoBack = styled.div`
  display: inline-block;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;

  &:hover .copy-button {
    color: #fff;
    transform: translateY(-3px) scale(1.01);
  }

  &:active .copy-button {
    color: #ccc;
    transform: translateY(-1px) scale(1);
  }

  .copy-button, .copy-button:active {
    border: 0;
    outline: 0;
    opacity: 1;
    color: #ccc;
    background-color: rgba(255, 255, 255, .1);
    border: 2px solid rgba(229, 241, 241, .15);
    font-size: 1.2rem;
    padding: .5rem 1.5rem;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;

    transition: all .3s;
  }
`;

export default class ColorBox extends Component {

  state = {
    copied: false
  }

  // An onClick handler function which stops any further events from happening (in our case, the copy) when the user clicks the More button on the color box
  stopCopy = evt => {
    evt.stopPropagation();
  }

  changeCopyState = evt => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { background, name, paletteId, id, showLink, height, canCopy, isGoBackBox } = this.props;
    const { copied } = this.state;
    const isLightColor = chroma.contrast(background, "black") > 6;
    return (
        
      <Root
        background={background}
        height={height}
      >
        {canCopy && (
          <div>
            <div className={`copy-overlay ${copied ? 'show' : ''}`} style={{ background }} />
            <div className={`copy-msg ${copied ? 'show' : ''}`}>
              <h1>Copied!</h1>
              <h2>{background}</h2>
            </div>
          </div>
        )}
        
        {isGoBackBox && (
          <GoBack
            as={Link}
            exact="true"
            to={`/palette/${paletteId}`}
          >   
            <button className="copy-button">Go Back</button>
          </GoBack>
        )}

        <div className="box-content">
          <span className={isLightColor && 'darkText'}>{name}</span>
        </div>
        
        {canCopy && (
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div className="copy-container"> 

              <div className="button-container">
                <button className="copy-button">Copy</button>
              </div>

            </div>
          </CopyToClipboard>
        )}

        {showLink && (
          <Link
            exact="true"
            to={`/palette/${paletteId}/${id}`}
            onClick={this.stopCopy}
          >
            <span className={`see-more ${isLightColor && 'darkText'}`}>More</span>
          </Link>
        )}

      </Root>
    )
  }
}
