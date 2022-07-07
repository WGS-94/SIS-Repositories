import React from 'react';
import { useAuth } from "../../hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import AstronautAnimate from '../../assets/astronaut-animate.svg';

import '../SignIn/style.css';

export default function SignIn() {

  const history = useHistory();
  const { signIn, loading, setLoading } = useAuth();

  async function handleSubmit({ email, password }) {

     if (!email || !password ) {
       return toast.error("Não foi possível fazer login. Preencha todos os campos corretamente!");
     }
 
     try {
       await signIn({ email, password },
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
 
       history.push("/home");
 
       toast.success(`Bem vindo, Login efetuado com sucesso!`);
     } catch (error) {
       setLoading(false);
       toast.error("Senha ou E-mail incorretos!");
     }
   }

  return (
    <div className="main-login">
    <div className="left-login">
      <div className="left-login-title">
        <h1>Faça login</h1>
        <h2>E registre seus repositórios</h2>
      </div>
      <img src={AstronautAnimate} alt="Astronaut" />
    </div>
    <div className="right-login">
      <div className="right-login-items">
        <Form onSubmit={handleSubmit} className="card-login">
          <h1>SisRepo</h1>
          <div className="textField">
            <label htmlFor="email">E-mail</label>
            <Input 
              type="text" 
              name="email" 
              id="email"
            />
          </div>
          <div className="textField">
            <label htmlFor="password">Senha</label>
            <Input 
              type="password" 
              name="password" 
              id="password"
            />
          </div>
          <button type="submit" className="btn-login">
            {loading ? <i style={{ fontSize: 32, color: '#2b134b' }} className="fa fa-spinner fa-pulse"/> : 'Entrar' }
          </button>
        </Form>
        <div className="right-login-link">
          <Link to="/signUp">Ainda não tem uma conta? <span>Cadastra-se</span></Link>
        </div>
      </div>
      
    </div>
    </div>
  );
}
