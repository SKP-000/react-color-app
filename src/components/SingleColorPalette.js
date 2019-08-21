import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';
import {
  Root,
  PaletteColors
} from '../styles/PaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props.palette, this.props.colorId);

    this.state = {
      format: 'hex',
      snackbarOpen: false,
      copied: false
    }
  }

  changeParentCopy = evt => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  // loops through the levels, returning a shades array
  getShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades.push(
        allColors[key].find(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  colorFormatHandler = () => {
    if (this.state.format === 'hex') {
      return 'HEX - #AB7C90'
    } else if (this.state.format === 'rgb') {
      return 'RGB - rgb(237, 222, 140)'
    } else if (this.state.format === 'rgba') {
      return 'RGBA - rgba(237, 222, 140, 0.8)'
    }
  }

  changeFormat = evt => {
    this.setState({ format: evt.target.value, snackbarOpen: true }, () => {
      this.setState({ colorFormat: this.colorFormatHandler() });
    });
    setTimeout(() => {
      this.setState({ snackbarOpen: false })
    }, 2000);
  }
  
  getHeight = () => {
    const viewportWidth = window.innerWidth;
    console.log(viewportWidth);
    const height = viewportWidth < 600 ? '10%' : '50%';
    return height;
  }

  render() {
    const { format, copied } = this.state;
    const { palette } = this.props;
    const { paletteName, emoji } = this.props.palette;

    const colorBoxes = this._shades.map(color => (
      <ColorBox
        name={color.name} 
        key={color.name}
        background={color[format]}
        copied={copied}
        changeParentCopy={this.changeParentCopy}
        height={this.getHeight()}
        showLink={false}
        canCopy
      />
    ));

    return (
      <Root copied={copied}>
        <Navbar 
          colorFormat={this.state.format}
          handleChange={this.changeFormat}
          closeSnackbar={this.closeSnackbar}
          open={this.state.snackbarOpen}
          showSlider={false}
        />
        <PaletteColors>
          {colorBoxes}
          <ColorBox
            background={'#000'}
            height={this.getHeight()}
            paletteId={palette.id}
            isGoBackBox
          />
        </PaletteColors>

        <Footer 
          paletteName={paletteName}
          emoji={emoji}
        />
        
      </Root>
    )
  }
}

export default SingleColorPalette;