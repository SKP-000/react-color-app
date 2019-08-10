import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import './PaletteList.css';

class PaletteList extends Component {

  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <h1 className="PaletteList-title">React Colors App</h1>
        {palettes.map(palette => 
          <Link className="PaletteLink" exact to={`/palettes/${palette.id}`}>
            <MiniPalette {...palette} />
          </Link>
        )}
      </div>
    )
  }
}

export default PaletteList;