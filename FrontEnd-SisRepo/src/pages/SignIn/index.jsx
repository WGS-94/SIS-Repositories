import React from 'react'

export default function SignIn() {
  return (
    <div class="main-login">
    <div class="left-login">
      <h1>Faça login <br>E entre para o nosso time</br></h1>
      <img src="astronaut-animate.svg" alt="Astronaut" />
    </div>
    <div class="right-login">
      <div class="card-login">
        <h1>LOGO</h1>
        <div class="textField">
          <label for="user">Usuário</label>
          <input type="text" name="user" placeholder="Usuário" />
        </div>
        <div class="textField">
          <label for="password">Usuário</label>
          <input type="password" name="password" placeholder="Senha" />
        </div>
        <button class="btn-login">Entrar</button>
      </div>
    </div>
    </div>
  );
}
