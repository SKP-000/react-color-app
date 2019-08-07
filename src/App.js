import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <div>
        <Switch>
          <Route exact path="/" render={() => <h1>Palette List will display here</h1>} />
          <Route
            exact
            path="/palette/:id"
            render={routeProps =>
              <Palette
                palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
              />
            } 
            />
        </Switch>
      </div>
    )
  }
}

export default App;