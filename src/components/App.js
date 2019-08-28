import React, { Component } from 'react';
import Routes from './Routes';
import seedColors from '../seedColors';

class App extends Component {
  _savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  state = {
    palettes: this._savedPalettes || seedColors
  }

  // a simple function which returns the palette whose id matches that of the route
  findPalette = (id) => {
    for (let palette of this.state.palettes) {
      if (palette.id === id) return palette;
    }
  }

  syncLocalStorage = () => {
    const { palettes } = this.state;
    // save palettes to localStorage
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }

  savePalette = async (newPalette) => {
    await this.promisedSetState(st => (
      { palettes: [...st.palettes, newPalette] }
    ));
    this.syncLocalStorage();
  }

  removePalette = async (id) => {
    // setState will happen instantly since our app isn't that big but just to be safe, we await until the state is set proper before we sync the data to localStorage
    await this.promisedSetState(st => (
      { palettes: st.palettes.filter(palette => palette.id !== id)}
    ));
    this.syncLocalStorage();
  }

  // returns a promise version of setState which we can then use the async/await syntax on
  promisedSetState = (newState) => {
    return new Promise(resolve => {
      this.setState(newState, () => {
        resolve();
      })
    });
  }

  render() {
    return (
      <Routes 
        removePalette={this.removePalette}
        savePalette={this.savePalette}
        findPalette={this.findPalette}
        palettes={this.state.palettes}
      />
    )
  }
}

export default App;