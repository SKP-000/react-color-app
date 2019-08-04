import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {

  state = {
    copied: false
  }

  changeCopyState = evt => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    return (
        
      <div className="ColorBox" style={{ background: background }}>
        <div className={`copy-overlay ${copied ? 'show' : ''}`} style={{ background }} />
        <div className={`copy-msg ${copied ? 'show' : ''}`}>
          <h1>Copied!</h1>
          <h2>{background}</h2>
        </div>
        
        <CopyToClipboard text={background} onCopy={this.changeCopyState}>
          <div className="copy-container">

            <div className="box-content">
              <span>{name}</span>
            </div>

            <div className="button-container">
              <button className="copy-button">Copy</button>
            </div>

          </div>
        </CopyToClipboard>

        <span className="see-more">More</span>
      </div>
    )
  }
}
