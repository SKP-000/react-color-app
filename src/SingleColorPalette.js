import React, { Component } from 'react';
import styled from 'styled-components';

class SingleColorPalette extends Component {

  // loops through the levels, returning the hex value when we find the color we want to display
  findColor = (id) => {
    for (let level of this.props.palette.colors) {
      if (level.id === id) return level.hex;
    }
  }

  render() {
    const { palette, colorId } = this.props;
    return (
      <div>
        <h1>SINGLE COLOR PALETTE</h1>
      </div>
    )
  }
}

export default SingleColorPalette;