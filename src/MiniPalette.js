import React, { Component } from 'react';
import styled from 'styled-components';

// const styles = {
//   main: {
//     backgroundColor: 'purple',
//     border: '3px solid teal'
//   },
//   heading: {
//     fontSize: '5rem',
//     color: '#fca',
//     borderBottom: '5px solid #fcd'
//   }
// };

const Root = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

`;

const Colors = styled.div`
  background-color: grey;

`;

const Title = styled.h5`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-size: 1rem;
  padding-top: 0.5rem;
  position: relative;

  /* Styling for Emoji */
  span {
    font-size: 1.5rem;
  }

`;

class MiniPalette extends Component {
  render() {
    const { paletteName: name, emoji } = this.props;

    return (
      <Root color="#000" fontColor="#fca">
        <Colors>
          
        </Colors>

        <Title>{name} <span>{emoji}</span></Title>

      </Root>
    );
  }
}

export default MiniPalette;