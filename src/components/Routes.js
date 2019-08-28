import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from '../colorHelper';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .fade-exit {
    opacity: 1;
  }

  .page-enter {
    transform: translateX(100%);
  }

  .page-enter-active {
    transform: translateX(0);
    transition: transform 1s;
  }

  .page-exit-active {
    transform: translate(-100%);
    transition: transform 1s;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 800ms;
  }
`;

export default class Routes extends Component {
  render() {
    const { removePalette, palettes, savePalette, findPalette } = this.props;
    return (
      <Route render={({location}) => (
        <div>
          <GlobalStyle />
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames={'fade'}
              timeout={800}
            >
              <Switch location={location}>
                <Route 
                  exact
                  path="/palette/new"
                  render={(routeProps) =>
                    <Page>
                      <NewPaletteForm
                        savePalette={savePalette}
                        {...routeProps}
                        palettes={palettes}
                      />
                    </Page>
                  }
                />
                <Route
                  exact
                  path="/"
                  render={routeProps =>
                    <Page>
                      <PaletteList 
                        palettes={palettes}
                        removePalette={removePalette}
                        {...routeProps}
                      />
                   </Page>
                  } 
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps =>
                   <Page>
                      <Palette
                        palette={generatePalette(findPalette(routeProps.match.params.id))} 
                      />
                   </Page>
                  } 
                />
                <Route 
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps =>
                  <Page>
                    <SingleColorPalette
                    palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                    colorId={routeProps.match.params.colorId}
                    />
                 </Page>
                  }
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        
      )}/>
    )
  }
}