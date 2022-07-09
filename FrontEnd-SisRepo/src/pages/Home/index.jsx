import React, { useEffect } from 'react';
import { PlusCircle, Trash, MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Transition from '../../components/Transition'
import CreateRepoModal from '../../components/CreateRepoModal';
import * as S from './style'; 

export default function Home() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

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
    
    setTimeout(()=>{
      window.location.reload();
    }, 4000);

    //window.location.reload();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    reload();
  }

  async function handleDeletRepository(repository) {

    const user_id = localStorage.getItem("@SisRepository:userID");

    try {

      await api.delete(`/users/${user_id}/repositories/${repository._id}`);
      
      toast.success("Repositório removido com sucesso");

      reload();

      } catch (error) {
      return toast.error("Não foi possível remover este repositório");
    }
  }

  return (
    <S.MainHomeContainer>
      <Header />
      <S.MainHomeAlign>
        <S.MainHomeContent>

        <header>
          <S.InputGroup>
            <div>
              <MagnifyingGlass size={24} style={{ color: '#808080'}} />
              <input 
                type="text" 
                placeholder="Pesquisar repositório..." 
                onChange={event => setSearch(event.target.value)}
              />
            </div>
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


          {/*search.length <= 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minHeight: '50vh',
                alignItems: "center",
                padding: '0 2rem',
              }}
            >
              <h3 className="home__search-faild">
                Sem resultado para pesquisa :(
              </h3>
            </div>
          )*/}

        {data.length > 0 ?
          <div>

          {data.filter(repo => {

            if (search === '') {
              return repo;
            } else if (repo.name.toLowerCase().includes(search.toLowerCase())) {
              return repo;
            }

          }).map((repository) => (
            <S.Main key={repository._id}>
              <div>
                <p>USUÁRIO: <span>{repository.name.substring(0, repository.name.indexOf('/'))}</span></p>
                <p>PROJETO: <span>{repository.name.substring(repository.name.indexOf('/')+ 1)}</span></p>
                <p>URL: <Link to="" target="_blank" >{repository.url}</Link></p>
              </div>
              <button 
                type="button" 
                data-testid="remove-repo-button"
                onClick={() => handleDeletRepository(repository)}
              >
                <Trash size={28} />
              </button>
            </S.Main>
          ))}
          </div> 
          : (
          <Transition onRequestClose={openModal} />
        )}

        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          ariaHideApp={false}
          onHide={reload}
        >
          <CreateRepoModal onExit={reload} onRequestClose={closeModal} />
        </Modal>

        </S.MainHomeContent>
      </S.MainHomeAlign>
    </S.MainHomeContainer>
  )
}
