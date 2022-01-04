import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    <div>
      <form>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          data-testid="email-input"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Senha"
          data-testid="password-input"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
        />
        <button
          type="button"
          disabled={ !toggleButton() }
          data-testid="login-submit-btn"
          onClick={ handleSaveLocalStorage }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
