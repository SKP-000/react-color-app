import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props.palette, this.props.colorId);

    this.state = {
      format: 'hex',
      snackbarOpen: false
    }
  }

  // loops through the levels, returning the hex value when we find the color we want to display
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

  render() {
    const { format } = this.state;
    const { palette } = this.props;
    const { paletteName, emoji } = this.props.palette;

    const colorBoxes = this._shades.map(color => (
      <ColorBox
        name={color.name} 
        key={color.id}
        background={color[format]}
        height={'50%'}
        showLink={false}
        canCopy
      />
    ));

    return (
      <div className="Palette">
        <Navbar 
          colorFormat={this.state.format}
          handleChange={this.changeFormat}
          closeSnackbar={this.closeSnackbar}
          open={this.state.snackbarOpen}
          showSlider={false}
        />
        <div className="Palette-colors">
          {colorBoxes}
          <ColorBox
            id='react-logo'
            background={'#000'}
            height={'50%'}
            paletteId={palette.id}
            isGoBackBox
          />
        </div>

        <Footer 
          paletteName={paletteName}
          emoji={emoji}
        />
      </div>
    )
  }
}

export default SingleColorPalette;