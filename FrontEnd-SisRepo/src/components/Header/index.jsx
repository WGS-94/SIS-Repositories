import React from 'react';
import { useAuth } from "../../hooks/auth";
import { SignOut } from 'phosphor-react';

import * as S from './style';

export default function Header() {

  const { signOut } = useAuth();

  return (
    <S.Header>
      <div>
        <h1>SisRepo</h1>
        <button
          type='button'
          onClick={signOut}
        >
          Sair
          <SignOut size={24} />
        </button>
      </div>
    </S.Header>
  )
}