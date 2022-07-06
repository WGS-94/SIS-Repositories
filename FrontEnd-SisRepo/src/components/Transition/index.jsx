import React from 'react';
import { Link } from 'react-router-dom';

import clipBoardImg from '../../assets/Clipboard.svg';

import { Container } from './style';

function Transition() {
  return (
    <Container>
      <img src={clipBoardImg } alt="" />
      <h2>Nenhum repositório cadastrado!</h2>
      <p>Clique no botão acima ou <span>👉</span> <Link> adicnionar nova máquina</Link></p>
    </Container>
  )
}

export default Transition;