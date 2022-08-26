import React from 'react';
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import { Form, Input} from "@rocketseat/unform";
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api';
import AstronautAnimate from '../../assets/astronaut-animate.svg';

import * as S from './style';

import '../SignUp/style.css';

export default function SignUp() {

  const history = useHistory();
  const { signIn, loading, setLoading } = useAuth();

   async function handleSubmit({ name, email, password }) {

    if (!name || !email || !password) {
      return toast.error("Não foi possível cadastrar este usuário. Preencha todos os campos corretamente!");
    }

    try {
      const response = await api.post("/users", {name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      );

      localStorage.setItem("@mmsystem:userID", response.data._id);

      await signIn({
        email,
        password,
      });

      toast.success("Usuário cadastrado com sucesso");

      history.push("/home");

    } catch (error) {
      setLoading(false)
      //console.log("ERRO", error);
      return toast.error("Não foi possível cadastrar. Este usuário já existe!");
    }
  }
  return (
    <S.MainSignIn>
      <S.MainSignInLeft>
        <div>
          <h1>Cadastra-se</h1>
          <h2>E registre seus repositórios</h2>
        </div>
        <img src={AstronautAnimate} alt="Astronaut" />
      </S.MainSignInLeft>
    <div className="right-login">
      <div className="right-login-items">
        <h1>SisRepo</h1>
        <Form onSubmit={handleSubmit} className="card-login">
          <div className="textField">
            <label htmlFor="name">Nome</label>
            <Input
              type="text" 
              name="name" 
              id="name"
            />
          </div>
          <div className="textField">
            <label htmlFor="email">E-mail</label>
            <Input
              type="text" 
              name="email" 
              id="email" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>
          <div className="textField">
            <label htmlFor="password">Senha</label>
            <Input
              type="password" 
              name="password" 
              id="password"
              minLength="6"
            />
          </div>
          <button type="submit" className="btn-login">
            {loading ? <i style={{ fontSize: 32, color: '#2b134b' }} className="fa fa-spinner fa-pulse"/> : 'Cadastrar' }
          </button>
        </Form>
        <div className="right-login-link">
          <Link to="/">Já tem uma conta? <span>Faça login</span></Link>
        </div>
      </div>
    </div>
    </S.MainSignIn>
  );
}
