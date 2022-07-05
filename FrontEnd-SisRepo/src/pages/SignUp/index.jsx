import React from 'react';
import AstronautAnimate from '../../assets/astronaut-animate-up.svg';

import './style.css';

export default function SignIn() {
  return (
    <div className="main-login">
    <div className="left-login">
      <div className="left-login-title">
        <h1>Cadastra-se</h1>
        <h2>E registre seus repositórios</h2>
      </div>
      <img src={AstronautAnimate} alt="Astronaut" />
    </div>
    <div className="right-login">
      <div className="right-login-items">
        <div className="card-login">
          <h1>SisRepo</h1>
          <div className="textField">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" />
          </div>
          <div className="textField">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>
          <div className="textField">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>
          <button className="btn-login">Entrar</button>
        </div>
        <div className="right-login-link">
          <a href="/">Já tem uma conta? <span>Faça login</span></a>
        </div>
      </div>
      
    </div>
    </div>
  );
}
