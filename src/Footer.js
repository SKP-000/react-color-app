import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <footer className="Footer">
        <div className="Footer-content">
          <span className="Footer-emoji">{emoji}</span>
          <span className="Footer-paletteName">{paletteName}</span>
        </div>
      </footer>
    )
  }
}

export default Footer;
