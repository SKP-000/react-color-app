import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const GoBackBtn = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  font-size: 2rem;
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
    const { background, name, paletteId, id, showLink, height, canCopy } = this.props;
    const { copied } = this.state;
    return (
        
      <Root background={background} height={height}>
        {canCopy && (
          <div>
            <div className={`copy-overlay ${copied ? 'show' : ''}`} style={{ background }} />
            <div className={`copy-msg ${copied ? 'show' : ''}`}>
              <h1>Copied!</h1>
              <h2>{background}</h2>
            </div>
          </div>
        )}
        
        {id === 'react-logo' && (
          <GoBack>   
            <GoBackBtn
              as={Link}
              exact
              to='/'
            >
              Go Back
            </GoBackBtn>
          </GoBack>
        )}

        <div className="box-content">
            <span>{name}</span>
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
            <span className="see-more">More</span>
          </Link>
        )}

      </Root>
    )
  }
}
