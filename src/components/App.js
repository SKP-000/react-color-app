import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from '../colorHelper';
import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from '../seedColors';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  // a simple function which returns the palette whose id matches that of the route
  findPalette = (id) => {
    for (let palette of seedColors) {
      if (palette.id === id) return palette;
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route 
            exact
            path="/palette/new"
            render={() => <NewPaletteForm />}
          />
          <Route
            exact
            path="/"
            render={routeProps =>
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