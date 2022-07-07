import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;
  height: 300px;

  /*border: 1px solid #fff;*/

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: var(--gray-400);
    font-weight: bold;
    margin: 1rem 0;
    line-height: 1.6;
  }

  p{
    font-size: 1.1rem;
    color: var(--gray-400);
    font-weight: bold;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    color: var(--title);
    padding-left: 0.5rem;
  }

`;