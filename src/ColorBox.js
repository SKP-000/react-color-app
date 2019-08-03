import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div className="ColorBox" style={{ background: background }}>
        <div className="copy-container">
          
          <div className="box-content">
            <span>{name}</span>
          </div>
          
          <div className="button-container">
            <button className="copy-button">Copy</button>
          </div>

        </div>

        <span className="see-more">More</span>
      </div>
    )
  }
}
