import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
