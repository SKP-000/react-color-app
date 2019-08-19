import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Root,
  Colors,
  Title,
  MiniColor,
  Delete
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
        <Delete>
          <DeleteIcon className='deleteIcon' />
        </Delete>
        <Colors>
          {miniColorBoxes}
        </Colors>

        <Title>{name} <span>{emoji}</span></Title>

      </Root>
    );
  }
}

export default MiniPalette;