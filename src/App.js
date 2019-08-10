import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
  // a simple function which returns the palette whose id matches that of the route
  findPalette = (id) => {
    for (let palette of seedColors) {
      if (palette.id === id) return palette;
    }
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routeProps =>
            <PaletteList 
              palettes={seedColors}
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
            render={() => <h1>SINGLE COLOR PALETTE</h1>}
          />
        </Switch>
      </div>
    )
  }
}

export default App;