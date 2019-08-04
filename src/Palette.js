import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {

  state = {
    level: 500
  }

  changeLevel = (level) => {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const ColorBoxes = colors[level].map(colorDetails => (
      <ColorBox background={colorDetails.hex} name={colorDetails.name} />
    ));

    return (
      <div className="Palette">
        {/* Navbar here. TODO */}
        <Navbar level={level} changeLevel={this.changeLevel} />
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