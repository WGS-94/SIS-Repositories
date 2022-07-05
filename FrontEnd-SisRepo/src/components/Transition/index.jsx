import React from 'react';
import { Link } from 'react-router-dom';

import clipBoardImg from '../../assets/Clipboard.svg';

import { Container } from './style.jsx';

function Transition() {
  return (
    <Container>
      <img src={clipBoardImg } alt="" />
      <p>Nenhuma máquina cadastrada!</p>
      <span>Clique no botão acima ou neste link <Link to="/add-new-repository"> adicnionar nova máquina</Link></span>
    </Container>
  )
}

export default Transition;