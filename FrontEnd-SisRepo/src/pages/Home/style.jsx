import styled from 'styled-components';

export const MainHomeContainer = styled.div`
  background: var(--gray-600);
  height: 0 auto;
`;

export const MainHomeAlign = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;

  margin-top: -4rem;

  //border: 1px solid #fff;
`;

export const MainHomeContent = styled.section`
  //border: 1px solid #fff;

  margin-top: -3rem;
  padding: 2.2rem 6rem;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background: transparent;
  font-size: 16px;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray-600);
    color: var(--gray-100);
    border: 2px solid var(--title);
    border-radius: 8px;

    svg {
      margin-left: 1rem;
      cursor: pointer;
    }

    input {
      flex: 1;
      border: 0;
      background: var(--gray-600);
      color: var(--gray-100);
      padding: 0.75rem 0.7rem;
      height: 54px;
      border-radius: 8px;
      

      &::placeholder {
        color: var(--gray-300)
      }
    }
}

  button {
    font-weight: 800;
    border-radius: 8px;
    border: 0;
    /*background: var(--purple-dark);*/
    background: var(--title);
    color: #2b134b;
    font-size: 0.875rem;
    height: 54px;
    font-size: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;

    padding: 0.875rem;
    transition: background 0.2s;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-700);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;

  div {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 0.5rem;
      color: var(--gray-300);

      span {
        color: var(--gray-100);
        margin-left: 0.5rem;
      }
      
      a {
        text-decoration: none;
        color: var(--blue);
        margin-left: 0.5rem;

        &:hover {
          color: var(--blue-dark);
        }
      }
    }
  }

  button {
    background: transparent;
    border: 0;
  }

  svg {
    color: var(--gray-300);

    &:hover {
      color: var(--danger);
    }
  }
  
`;