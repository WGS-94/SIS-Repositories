import React, { useEffect } from 'react';
import { PlusCircle, Trash } from 'phosphor-react';
import api from '../../services/api';
import Header from '../../components/Header';

import * as S from './style'; 
import { Link } from 'react-router-dom';

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    reload();
    
  }
  
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

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10
            }}
          >
            <i style={{ fontSize: 30, color: '#eee' }} className="fa fa-spinner fa-pulse"></i>
            <span style={{ fontSize: 16, marginLeft: 5, color: '#eee' }}>Carregando os repositórios</span>
          </div>
        )}


        {data.map((repository) => (
          <S.Main key={repository._id}>
            <div className="main-home-repo">
              <p>NOME: <span>{repository.name}</span></p>
              <p>URL: <Link to="" target="_blank" >{repository.url}</Link></p>
            </div>
            <button type="button" data-testid="remove-task-button">
              <Trash size={28} />
            </button>
          </S.Main>
        ))}
        

      </S.MainHomeContent>
    </S.MainHomeContainer>
  )
}
