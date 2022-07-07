import React, { useEffect } from 'react';
import { PlusCircle, Trash, MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Modal from 'react-modal';
import Header from '../../components/Header';
import Transition from '../../components/Transition'
import RemoveMachineModal from '../../components/RemoveRepoModal';
import * as S from './style'; 

export default function Home() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    async function loadData() {

      setLoading(true);
      const user_id = localStorage.getItem("@SisRepository:userID");
      const response = await api.get(`/users/${user_id}/repositories`);
      setLoading(false);
      setData(response.data);
      
    }
    loadData();
    
  }, []);

  function reload() {
    window.location.reload();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    reload();
  }

  const handleDeletRepository = (repository) => {
    console.log(repository)
  }

  return (
    <S.MainHomeContainer>
      <Header />
      <S.MainHomeAlign>
        <S.MainHomeContent>

        <header>
          <S.InputGroup>
            <input 
              type="text" 
              placeholder="Pesquisar repositório..." 
              //placeholder={`${<MagnifyingGlass size={32} />}`}
            />
            <button 
              type="submit" 
              data-testid="add-repo-button" 
              onClick={openModal}
            >
              Adicionar
            <PlusCircle size={24} />
            </button>
          </S.InputGroup>
        </header>

        <h3 style={{ textAlign: 'center', marginTop: 30, fontSize: 24}}>Repositórios</h3>

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              minHeight: '50vh',
              alignItems: "center",
              padding: '0 2rem',
            }}
          >
            <i style={{ fontSize: 30, color: '#eee' }} className="fa fa-spinner fa-pulse"></i>
            <span style={{ fontSize: 16, marginLeft: 5, color: '#eee' }}>Carregando os repositórios</span>
          </div>
        )}

        {data.length >= 0 ?
          <div>
          {data.map((repository) => (
            <S.Main key={repository._id}>
              <div>
                <p>USUÁRIO: <span>{repository.name.substring(0, repository.name.indexOf('/'))}</span></p>
                <p>NOME DO REPOSITÓRIO: <span>{repository.name.substring(repository.name.indexOf('/')+ 1)}</span></p>
                <p>URL: <Link to="" target="_blank" >{repository.url}</Link></p>
              </div>
              <button 
                type="button" 
                data-testid="remove-repo-button"
                onClick={() => handleDeletRepository(repository._id)}
              >
                <Trash size={28} />
              </button>
            </S.Main>
          ))}
          </div> 
          : (
          <Transition />
        )}

        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          ariaHideApp={false}
          onHide={reload}
        >
          <RemoveMachineModal onExit={reload} onRequestClose={closeModal} />
        </Modal>

        </S.MainHomeContent>
      </S.MainHomeAlign>
    </S.MainHomeContainer>
  )
}
