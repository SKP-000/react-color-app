import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './PaletteList.css';

const Root = styled.div`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 50%;
  padding: .5rem;
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
  align-items: center;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
    
  }
`;

const Palettes = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

class PaletteList extends Component {

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes } = this.props;
    return (
      <Root>
        <Container>
          
          <Nav>
            <h1 className='title'>React Colors App</h1>
            <Link
              exact='true'
              to='/'
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