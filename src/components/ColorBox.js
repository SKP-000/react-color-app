import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import {
  CopyButton,
  Root,
  ButtonContainer,
  GoBack,
  BoxContent,
  SeeMore,
  CopyOverlay,
  CopyMsg
} from '../styles/ColorBoxStyles';



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
    const {
      background,
      name,
      paletteId,
      id,
      showLink,
      height,
      canCopy,
      isGoBackBox
    } = this.props;

    const { copied } = this.state;
    return (
        
      <Root
        background={background}
        height={height}
      >
        {canCopy && (
          <div>
            <CopyOverlay
              copied={copied}
              color={background}  
            />
            <CopyMsg copied={copied}>
              <h1>Copied!</h1>
              <h2>{background}</h2>
            </CopyMsg>
          </div>
        )}
        
        {isGoBackBox && (
          <GoBack
            as={Link}
            exact="true"
            to={`/palette/${paletteId}`}
          >   
            <CopyButton><span className="left-arrow">&larr;</span> Go Back</CopyButton>
          </GoBack>
        )}

        <BoxContent background={background}>
          <span>{name}</span>
        </BoxContent>
        
        {canCopy && (
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div> 
              <ButtonContainer>
                <CopyButton>Copy</CopyButton>
              </ButtonContainer>
            </div>
          </CopyToClipboard>
        )}

        {showLink && (
          <Link
            exact="true"
            to={`/palette/${paletteId}/${id}`}
            onClick={this.stopCopy}
          >
            <SeeMore>More</SeeMore>
          </Link>
        )}

      </Root>
    )
  }
}