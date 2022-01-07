import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import imageRecipe from '../images/chef-hat.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const toggleButton = () => {
    const REGEX_EMAIL = /\S+@\S+\.\S+/;
    const SIX = 6;
    const emailVallied = REGEX_EMAIL.test(email);
    const passwordVallied = password.length > SIX;
    return emailVallied && passwordVallied;
  };

  const handleSaveLocalStorage = () => {
    const userEmail = { email };
    localStorage.setItem('user', JSON.stringify(userEmail));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    history.push('/comidas');
  };

  return (
    <div className="container-login d-flex align-items-center justify-content-center">
      <div className="content-login">
        <form className="form-login text-center ">
          <img src={ imageRecipe } className="img-fluid img-color" alt="imagem" />
          <h1 className="mb-5 font-weigth-ligth text-white">Login</h1>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              data-testid="email-input"
              className="form-control rounded-pill"
              value={ email }
              onChange={ (event) => setEmail(event.target.value) }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Senha"
              data-testid="password-input"
              className="form-control rounded-pill"
              value={ password }
              onChange={ (event) => setPassword(event.target.value) }
            />
          </div>
          <button
            type="button"
            disabled={ !toggleButton() }
            data-testid="login-submit-btn"
            onClick={ handleSaveLocalStorage }
            className="btn btn-success form-login rounded-pill"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
