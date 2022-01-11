import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SearchFoods from './pages/SearchFoods';
import Drinks from './pages/Drinks';
import SearchDrinks from './pages/SearchDrinks';
import Search from './pages/Search';
import FoodsForIngredients from './pages/FoodsForIngredients';
import DrinksForIngredients from './pages/DrinksForIngredients';
import FoodsForOrigin from './pages/FoodsForOrigin';
import FavoritesRecipes from './pages/FavoritesRecipes';
import FinishedRecipes from './pages/FinishedRecipes';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas/:ingredient?" component={ Home } />
          <Route exact path="/bebidas/:ingredient?" component={ Drinks } />
          <Route exact path="/perfil" component={ Profile } />
          <Route exact path="/explorar" component={ Search } />
          <Route exact path="/explorar/comidas" component={ SearchFoods } />
          <Route exact path="/explorar/bebidas" component={ SearchDrinks } />
          <Route exact path="/explorar/comidas/area" component={ FoodsForOrigin } />
          <Route exact path="/receitas-feitas" component={ FinishedRecipes } />
          <Route exact path="/receitas-favoritas" component={ FavoritesRecipes } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ FoodsForIngredients }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ DrinksForIngredients }
          />
          <Route
            exact
            path="/comidas/:id/in-progress"
            component={ RecipeInProgress }
          />
          <Route
            exact
            path="/bebidas/:id/in-progress"
            component={ RecipeInProgress }
          />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
