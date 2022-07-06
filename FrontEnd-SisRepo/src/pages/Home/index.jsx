import React from 'react';
import { PlusCircle, Trash } from 'phosphor-react';

import Header from '../../components/Header';

import * as S from './style'; 

export default function Home() {
  return (
    <S.MainHomeContainer>
      <Header />
      <S.MainHomeContent className='container'>

        <header>
          <S.InputGroup>
            <input 
              type="text" 
              placeholder="Adicione um novo repositório" 
            />
            <button 
              type="submit" 
              data-testid="add-repo-button" 
            >
              Adicionar
            <PlusCircle size={24} />
            </button>
          </S.InputGroup>
        </header>

        <main>
          <div className="main-home-repo">
            <p>Nome do repositório: </p>
            <p>Link do repositório: </p>
          </div>
          <button type="button" data-testid="remove-task-button">
            <Trash size={28} />
          </button>
        </main>

        <main>
          <div className="main-home-repo">
            <p>Nome do repositório: </p>
            <p>Link do repositório: </p>
          </div>
          <button type="button" data-testid="remove-task-button">
            <Trash size={28} />
          </button>
        </main>
      </S.MainHomeContent>
    </S.MainHomeContainer>
  )
}
