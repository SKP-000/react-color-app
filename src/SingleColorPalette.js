import React, { Component } from 'react';
import { palette } from '@material-ui/system';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props.palette, this.props.colorId)
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

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        name={color.name} 
        key={color.id}
        background={color.hex}
        height={'50%'}
        showLink={false}
        canCopy
      />
    ));

    return (
      <div className="Palette">
        <div className="Palette-colors">
          {colorBoxes}
          
        </div>
      </div>
    )
  }
}

export default SingleColorPalette;