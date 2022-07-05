import React from 'react';
import { PlusCircle, Trash } from 'phosphor-react';

import Header from '../../components/Header';

import './style.css'; 

export default function Home() {
  return (
    <div className='main-home-container'>
      <Header />
      <section className='main-home container'>

        <header>
          <div className="input-group">
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
          </div>
        </header>

        <main>
          <div className="main-home-repo">
            <p>Nome do repositório: </p>
            <p>Link do repositório: </p>
          </div>
          <button type="button" data-testid="remove-task-button">
            <Trash size={32} />
          </button>
        </main>

        <main>
          <div className="main-home-repo">
            <p>Nome do repositório: </p>
            <p>Link do repositório: </p>
          </div>
          <button type="button" data-testid="remove-task-button">
            <Trash size={32} />
          </button>
        </main>
      </section>
    </div>
  )
}
