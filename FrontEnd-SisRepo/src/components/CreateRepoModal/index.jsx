import React, { useState } from 'react';
import { toast } from 'react-toastify';
import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import { PlusCircle } from 'phosphor-react';

import { Container, Button, ModalContent } from './style';

export default function CreateRepositoryModal({ onRequestClose }) {
 
  const [url, setUrl] = useState('');

  async function handleCreateRepository() {

   const user_id = localStorage.getItem("@SisRepository:userID");

   const regex = new RegExp(/^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i);
    
   const match = url.match(regex);

   const name = match[5];

    try {
      await api.post(`/users/${user_id}/repositories`, {
        name,
        url,
        user_id
      });

      toast.success("Repositório cadastrado com sucesso");

    } catch (error) {
      //console.log("ERRO", error);
      return toast.error("Não foi possível remover, repositório já existe");
    }
  }

  return (
    <Container>
      <Button
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </Button>
      <ModalContent>
        <p>Adiconar Repositório</p>
        <input 
          type="text" 
          name='url' 
          placeholder='URL do repositório'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div>
          <button
            type='button'
            onClick={() => {handleCreateRepository(); onRequestClose()} }>
            Adicionar
            <PlusCircle size={24} />
          </button>
        </div>
      </ModalContent>
    </Container>
  )
}
