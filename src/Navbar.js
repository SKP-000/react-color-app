import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        
        <div className="logo">
          <Link
            to="/"
            className="logo-link"
          >
            reactcolorpicker
          </Link>
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
            
            <MenuItem value='hex'>HEX - #AB7C90</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(237, 222, 140)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(237, 222, 140, 0.8)</MenuItem> 

            </Select>
        </div>

        <Snackbar
          className='snackbar'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={this.props.open}
          autoHideDuration={3000} // 3000 ms
          message={
            <span id='message-id' className='snackbar-message'>
              Format Changed to: <span className='snackbar-colortext'>{this.props.colorFormat}</span>
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.props.closeSnackbar}
          action={
            [
              <IconButton onClick={this.props.closeSnackbar}>
                <CloseIcon className='snackbar-close' />
              </IconButton>
            ]
          }
        />

      </header>
    )
  }
}
