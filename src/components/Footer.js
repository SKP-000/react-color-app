import React, { Component } from 'react';
import { Root } from '../styles/FooterStyles';

class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <Root>
        <div>
          <span>{emoji}</span>
          <span>{paletteName}</span>
        </div>
      </Root>
    )
  }
}

export default Footer;