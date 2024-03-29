import styled from 'styled-components';

export const Header = styled.header`
  background: var(--gray-700);
  padding-top: 2rem;

  div {
    max-width: 1120px;
    margin: 0 auto;

    padding: 0 1rem 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      color: var(--title);
      cursor: pointer;
    }

    button {
      font-weight: 800;
      border-radius: 8px;
      border: none;
      background: transparent;
      color: var(--title);
      font-size: 0.875rem;
      height: 44px;
      font-size: 1rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      cursor: pointer;

      padding: 0.875rem;
      transition: background 0.2s;

      &:hover {
        border: 1px solid var(--title);
        color: var(--title);
      }
    }


  }

`;