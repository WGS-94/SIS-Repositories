import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Trash } from 'phosphor-react';
import Modal from 'react-modal';
import { Button, ModalContent } from './style';
import closeImg from '../../assets/close.svg';
import api from '../../services/api';

export default function DeleteRepositoryModal({ name, id }) {

  const [modalIsOpen, setIsOpen] = useState(false);

  function reload() {
    
    setTimeout(()=>{
      window.location.reload();
    }, 1000);

    //window.location.reload();
  };
 
  // Funções para abrir e fechar o modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    // reload();
  }

  const user_id = localStorage.getItem("@SisRepository:userID");

  // console.log(name, id, user_id);

  // Função para excluir uma setor
  async function DeleteRepository() {

    try { 
      await api.delete(`/users/${user_id}/repositories/${id}`);

      toast.success('Repositório excluido com sucesso 😃');

      reload();
      
    } catch (error) {
      toast.error('Erro ao remover este repositório 😢');
    }
  }

  return (
    <>
      <Button className='iconBtn' onClick={openModal}>
        <Trash size={20} weight="bold" color="#e25858" />
      </Button>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <ModalContent>
          <button
              type="button"
              onClick={closeModal}
            >
            <img src={closeImg} alt="Fechar modal" />
          </button>
          <div>
            <h2>Você realmente deseja excluir este repositório ?</h2>
            <p>{name}</p>            
            <div className='Btns'>
              <button className='noBtn' onClick={closeModal}>Não</button>
              <button className='yesBtn' onClick={() => {DeleteRepository(); closeModal()} }>Sim</button>
            </div>
          </div>
        </ModalContent>

      </Modal>
    </>
  )
}