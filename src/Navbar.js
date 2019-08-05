import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

        <div className="Navbar-selector">
            <Select 
              value={this.props.colorFormat}
              onChange={this.props.handleChange}
              name='color-format'
              className='format-selector'
          >
            
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem> 

            </Select>
        </div>


      </header>
    )
  }
}
