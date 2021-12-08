import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggleButton = () => {
    const REGEX_EMAIL = /\S+@\S+\.\S+/;
    const SIX = 6;
    const emailVallied = REGEX_EMAIL.test(email);
    const passwordVallied = password.length > SIX;
    return emailVallied && passwordVallied;
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
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
