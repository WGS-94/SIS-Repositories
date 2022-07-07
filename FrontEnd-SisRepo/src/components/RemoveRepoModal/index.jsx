import React from 'react';
import { toast } from 'react-toastify';
import closeImg from '../../assets/close.svg';
import api from '../../services/api';

import { ArrowCircleLeft, PlusCircle } from 'phosphor-react';

import { Container, Button, ModalContent } from './style';

function RemoveMachineModal({ onRequestClose }) {

  async function handleRemoveMachine() {

    /*const repository_id = localStorage.getItem("@mmsystem:repositoryID");
    const user_id = localStorage.getItem("@mmsystem:userID");*/

    try {
     /* await api.post(`/users/${user_id}/repositories/${repository_id}`);

      toast.success("Repositório cadastrado com sucesso");*/

    } catch (error) {
      //console.log("ERRO", error);
      return toast.error("Não foi possível cadastrar este repositório");
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
        <input type="text" name='repo' placeholder='Link repositório'/>
        <div>
          {/*<button 
            type='button'
            onClick={onRequestClose}>
            <ArrowCircleLeft size={24} />
            Voltar
          </button>*/}
          <button
            type='button'
            onClick={() => {handleRemoveMachine(); onRequestClose()} }>
            Adicionar
            <PlusCircle size={24} />
          </button>
        </div>
      </ModalContent>
    </Container>
  )
}

export default RemoveMachineModal;