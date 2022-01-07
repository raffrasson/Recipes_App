import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Data() {
  const { email } = JSON.parse(localStorage.getItem('user'));
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
      className="card m-5 p-5 d-flex align-items-center justify-content-center"
    >
      <div>
        <h3 data-testid="profile-email">{email}</h3>
      </div>
      <div>
        <div className="bg-light p-5 rounded mt-3" style={ { width: '35rem' } }>
          <h2>Receitas Prontas</h2>
          <p>As melhores receitas</p>
          <button
            type="button"
            className="container btn btn-success"
            data-testid="profile-done-btn"
            onClick={ finishedRecipes }
          >
            Receitas Feitas
          </button>
        </div>
      </div>

      <div className="bg-light p-5 rounded mt-3" style={ { width: '35rem' } }>
        <h2>Minhas receitas</h2>
        <p>Suas receitas favoritas</p>
        <button
          type="button"
          className="container btn btn-success"
          data-testid="profile-favorite-btn"
          onClick={ favoritesRecipes }
        >
          Receitas Favoritas
        </button>
      </div>
      <button
        type="button"
        data-testid="profile-logout-btn"
        className="btn btn-danger container w-50 m-5"
        onClick={ buttonLogout }
      >
        Sair
      </button>
    </div>
  );
}
