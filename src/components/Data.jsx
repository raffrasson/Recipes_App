import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import recipeFinished from '../images/recipefinished.png';
import recipeFavorite from '../images/recipefavorite.png';

export default function Data() {
  const [emailUser, setEmailUser] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      const userEmail = { email: '' };
      localStorage.setItem('user', JSON.stringify(userEmail));
    } else {
      const { email } = JSON.parse(localStorage.getItem('user'));
      setEmailUser(email);
    }
  }, []);

  const history = useHistory();

  const finishedRecipes = () => (
    history.push('/receitas-feitas')
  );

  const favoritesRecipes = () => (
    history.push('/receitas-favoritas')
  );

  function buttonLogout() {
    history.push('/');
    localStorage.clear();
  }

  return (
    <div
      className="container text-center mb-5 p-2 mx-auto row"
    >
      <div className="text-center">
        <div className="m-2">
          <h4 data-testid="profile-email">{emailUser}</h4>
        </div>
        <div className="row d-flex align-items-center justify-content-center ">
          <div
            className="bg-light p-2 rounded mt-3 col-md-5"
            style={ { width: '35rem' } }
          >
            <img src={ recipeFinished } alt="Receitas feitas" className="w-100" />
            <button
              type="button"
              className="container btn btn-success"
              data-testid="profile-done-btn"
              onClick={ finishedRecipes }
            >
              Receitas Feitas
            </button>
          </div>

          <div
            className="bg-light p-2 rounded mt-3 col-md-5"
            style={ { width: '35rem' } }
          >
            <img src={ recipeFavorite } alt="Receitas favoritas" className="w-100" />
            <button
              type="button"
              className="container btn btn-success"
              data-testid="profile-favorite-btn"
              onClick={ favoritesRecipes }
            >
              Receitas Favoritas
            </button>
          </div>
        </div>
        <div className="container">
          <button
            type="button"
            data-testid="profile-logout-btn"
            className="btn btn-danger m-2 w-50"
            onClick={ buttonLogout }
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
