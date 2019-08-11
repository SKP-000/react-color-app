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
  flex-basis: 30%;

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
  height: 110px;
  width: 100%;

  border-radius: 5px;
  overflow: hidden;
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
    font-size: 1.2rem;
  }

`;

const MiniColor = styled.div`
  width: 20%;
  height: 25%;
  display: inline-block;
  margin: 0;
  position: relative;
  margin-bottom: -3.5px;
`;

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