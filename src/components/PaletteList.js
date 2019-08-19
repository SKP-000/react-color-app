import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import {
  Root,
  GlobalStyle,
  Container,
  Nav,
  Palettes
} from '../styles/PaletteListStyles';



class PaletteList extends Component {

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes } = this.props;
    return (
      <Root>
        <GlobalStyle />
        <Container>
          
          <Nav>
            <h1>React Colors App</h1>
            <Link
              exact='true'
              to='/palette/new'
            >
              Create Palette
            </Link>
          </Nav>

          <Palettes>
            {palettes.map(palette => 
              <MiniPalette
                {...palette}
                key={palette.paletteName}
                goToPalette={this.goToPalette}
                />
            )}
          </Palettes>

        </Container>
      </Root>
    )
  }
}

export default PaletteList;