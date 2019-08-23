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
import { CSSTransition } from 'react-transition-group';



class PaletteList extends Component {

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, removePalette } = this.props;
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
                <CSSTransition
                  key={palette.id}
                  classNames='fade'
                  timeout={5000}
                >
                  <MiniPalette
                    {...palette}
                    removePalette={removePalette}
                    key={palette.paletteName}
                    goToPalette={this.goToPalette}
                    />
                </CSSTransition>  
              )} 
          </Palettes>

        </Container>
      </Root>
    )
  }
}

export default PaletteList;