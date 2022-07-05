import React from 'react'

export default function SignIn() {
  return (
    <div className="main-login">
    <div className="left-login">
      <h1>Faça login E entre para o nosso time</h1>
      <img src="astronaut-animate.svg" alt="Astronaut" />
    </div>
    <div className="right-login">
      <div className="card-login">
        <h1>LOGO</h1>
        <div className="textField">
          <label htmlFor="user">Usuário</label>
          <input type="text" name="user" placeholder="Usuário" />
        </div>
        <div className="textField">
          <label htmlFor="password">Usuário</label>
          <input type="password" name="password" placeholder="Senha" />
        </div>
        <button className="btn-login">Entrar</button>
      </div>
    </div>
    </div>
  );
}
