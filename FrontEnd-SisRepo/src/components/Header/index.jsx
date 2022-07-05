import React from 'react';

import { SignOut } from 'phosphor-react';

import './style.css';

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1>SisRepo</h1>
        <button>
          Sair
          <SignOut size={24} />
        </button>
      </div>
    </header>
  )
}