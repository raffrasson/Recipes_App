import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import FinishedRecipes from './pages/FinishedRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Home } />
          <Route exact path="/receitas-feitas" component={ FinishedRecipes } />
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Home } />
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ Explore } />
          <Route exact path="/explorar/bebidas" component={ Explore } />
          <Route exact path="/explorar/comidas/ingredientes" component={ Explore } />
          <Route exact path="/explorar/bebidas/ingredientes" component={ Explore } />
          <Route exact path="/explorar/comidas/area" component={ Explore } />
          <Route exact path="/perfil" component={ Profile } />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
