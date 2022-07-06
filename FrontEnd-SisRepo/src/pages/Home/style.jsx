import styled from 'styled-components';

export const MainHomeContainer = styled.div`
  background: var(--gray-600);
  height: 100vh;
`;

export const MainHomeContent = styled.section`
  border: 1px solid #fff;

  margin-top: -4rem;
  padding: 2.2rem 6rem;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background: transparent;
  font-size: 16px;

  input {
    flex: 1;
    background: var(--gray-600);
    border: 0;
    color: var(--gray-100);
    padding: 0.75rem 1.5rem;
    height: 54px;
    border-radius: 8px;
    border: 2px solid var(--title);

    &::placeholder {
      color: var(--gray-300)
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
    transition: background 0.1s;
  }
`;