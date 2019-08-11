import React, { Component } from 'react';
import {
  Root,
  Colors,
  Title,
  MiniColor
} from '../styles/MiniPaletteStyles';

class MiniPalette extends Component {

  handleClick = () => {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { paletteName: name, emoji, colors } = this.props;
    const miniColorBoxes = colors.map(color => (
      <MiniColor style={{ background: color.color }} key={color.name} />
    ))

    return (
      <Root color="#000" fontColor="#fca" onClick={this.handleClick}>
        <Colors>
          {miniColorBoxes}
        </Colors>

        <Title>{name} <span>{emoji}</span></Title>

      </Root>
    );
  }
}

export default MiniPalette;