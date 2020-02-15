import React from 'react';
import Home from './Home';
import Uslugi from './Uslugi';
import Cennik from './Cennik';
import Kontakt from './Kontakt';
import Onas from './Onas';
import Kategoria from '../components/Kategoria';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box; 
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background-color: #B8CA1F;
  }
`;

const contextState = {
  activeCategory: 'poit'
};
export const AppContext = React.createContext(contextState);

const Root = () => {
  return (
    <AppContext.Provider value={contextState}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/uslugi'>
            <Uslugi />
          </Route>
          <Route exact path='/cennik'>
            <Cennik />
          </Route>
          <Route exact path='/o-nas'>
            <Onas />
          </Route>
          <Route exact path='/kontakt'>
            <Kontakt />
          </Route>
          <Route path='/uslugi/:catId' component={Kategoria} />
        </Switch>
      </Router>
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default Root;
