import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        
        <div className="logo">
          reactcolorpicker
        </div>

        <div className="slider">
          <h1 className="slider-level">Level: {level}</h1>

          <Slider
            min={100}
            max={900}
            step={100}
            defaultValue={level}
            onAfterChange={changeLevel}

            trackStyle={{
              backgroundColor: 'transparent'
            }}

            railStyle={{
              height: '8px'
            }}

            />
        </div>
      </header>
    )
  }
}
