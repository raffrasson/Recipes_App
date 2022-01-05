import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import FinishedRecipes from './pages/FinishedRecipes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Home } />
          <Route exact path="/receitas-feitas" component={ FinishedRecipes } />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
