import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import {
  Root,
  Logo,
  LogoLink,
  SliderContainer,
  SelectorContainer,
  SnackbarContainer,
} from '../styles/NavbarStyles';

// TODO: Refactor all styles in Navbar.css into styled components

export default class Navbar extends Component {

  render() {
    const { level, changeLevel, showSlider } = this.props;
    return (
      <Root>
        
        <Logo>
          <LogoLink
            as={Link}
            to="/"
          >
            reactcolorpicker
          </LogoLink>
        </Logo>

        {showSlider && (
          <SliderContainer>
            <h1>Level: {level}</h1>

            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={level}
              onAfterChange={changeLevel}
              />
          </SliderContainer>
        )}

        <SelectorContainer>
            <Select 
              value={this.props.colorFormat}
              onChange={this.props.handleChange}
              name='color-format'
              className="select"
            >
            
            <MenuItem value='hex'>HEX - #AB7C90</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(237, 222, 140)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(237, 222, 140, 0.8)</MenuItem> 

            </Select>
        </SelectorContainer>

        <SnackbarContainer Snackbar={Snackbar} CloseIcon={CloseIcon}>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={this.props.open}
            autoHideDuration={3000} // 3000 ms
            className="snackbar"
            message={
              <span id="message-id" className="message">
                Format Changed to: <span className="colortext">{this.props.colorFormat}</span>
              </span>
            }
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            onClose={this.props.closeSnackbar}
            action={
              [
                <IconButton onClick={this.props.closeSnackbar}>
                  <CloseIcon className='close' />
                </IconButton>
              ]
            }
        />
        </SnackbarContainer>
        

      </Root>
    )
  }
}
