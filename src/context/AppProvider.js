import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(JSON
    .parse(window.localStorage.getItem('favoriteRecipes')));
  const [done, setDone] = useState(JSON
    .parse(window.localStorage.getItem('doneRecipes')));

  const [radio, setRadio] = useState([]);
  const [search, setSearch] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [drink, setDrink] = useState([]);
  const [recipeType, setRecipeType] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [boxes, setBoxes] = useState([]);

  const values = {
    favorites,
    setFavorites,
    done,
    setDone,
    copy,
    radio,
    setRadio,
    search,
    setSearch,
    recipe,
    setRecipe,
    drink,
    setDrink,
    recipeType,
    setRecipeType,
    recipeData,
    setRecipeData,
    boxes,
    setBoxes,
  };

  return (
    <div>
      <main>
        <AppContext.Provider value={ values }>
          {children}
        </AppContext.Provider>
      </main>
    </div>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
