import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
`;

export const Button = styled.button`
  position: absolute;
  right: 2rem;
  top: 1rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  
`;

export const ModalContent = styled.div`

  //border: 1px solid #fff;
  margin-top: 1.5rem;

  p {
    font-size: 1.7rem;
    color: var(--gray-300);
    margin-bottom: 2rem;
    font-weight: 800;
  }

  input {
    flex: 1;
    width: 100%;
    height: 48px;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    border: none;
    outline: none;
    background: var(--gray-600);
    color: var(--gray-300);

    &::placeholder {
      color: var(--gray-300)
    }
  }

  span {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 2rem;
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    button {
      width: 150px;
      color: var(--purple-rose);
      padding: 0.8rem;
      border: 0;
      outline: 0;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      background: var(--title);
      //background: #1E90FF;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      &:hover {
          background: #6495ED;
          color: #fff;
        }
    }

  }

`;