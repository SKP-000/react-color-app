import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';

class Palette extends Component {
  render() {
    const ColorBoxes = this.props.colors.map(colorDetails => (
      <ColorBox background={colorDetails.color} name={colorDetails.name} />
    ));

    return (
      <div className="Palette">
        {/* Navbar here. TODO */}
        Navbar here
        <div className="Palette-colors">
          {ColorBoxes}
          {/* a bunch of color boxes here. TODO */}
        </div>
        {/* Footer here... eventually. TODO */}
        Footer here
      </div>
    )
  }
}

export default Palette;