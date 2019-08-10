import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styled from 'styled-components';
import './PaletteList.css';

// TODO: Complete this Component I guess
// FIXME: Nothing to fix (at least not yet). yay!

const Root = styled.div`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
`;

const Palettes = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

const PaletteLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

class PaletteList extends Component {

  render() {
    const { palettes } = this.props;
    return (
      <Root>
        <Container>
          
          <Nav>
              <h1 className="title">React Colors App</h1>
          </Nav>

          <Palettes>
            {palettes.map(palette => 
              <PaletteLink as={Link} exact to={`/palette/${palette.id}`}>
                <MiniPalette {...palette} />
              </PaletteLink>
            )}
          </Palettes>

        </Container>
      </Root>
    )
  }
}

export default PaletteList;