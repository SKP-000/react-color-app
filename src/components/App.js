import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from '../colorHelper';
import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from '../seedColors';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

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

  savePalette = async(newPalette) => {
    // sets state and then syncs the palettes to localStorage
    await this.promisedSetState(st => (
      { palettes: [...st.palettes, newPalette] }
    ));
    this.syncLocalStorage();
  }

  // returns a Promise version of setState which we can then use the async/await syntax on
  promisedSetState = (newState) => {
    return new Promise(resolve => {
      this.setState(newState, () => {
        resolve();
      })
    })
  }

  render() {
    const { palettes } = this.state;
    return (
      <div>
        <Switch>
          <Route 
            exact
            path="/palette/new"
            render={(routeProps) =>
              <NewPaletteForm
                savePalette={this.savePalette}
                {...routeProps}
                palettes={this.state.palettes}
              />
            }
          />
          <Route
            exact
            path="/"
            render={routeProps =>
            <PaletteList 
              palettes={palettes}
              {...routeProps}
            />
            } 
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps =>
              <Palette
                palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
              />
            } 
          />
          <Route 
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => <SingleColorPalette
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
              colorId={routeProps.match.params.colorId}
              />}
          />
        </Switch>
      </div>
    )
  }
}

export default App;