import styled from "styled-components";

// export const Button = styled.button`
//   padding: 0;
// `;

export const Button = styled.button`
  height: 100%;
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #333;
  }
  
`;

export const ModalContent = styled.div`

  //border: 1px solid #fff;
  /* margin-top: 1.5rem; */

  > button {
    position: absolute;
    right: 2rem;
    top: 1.2rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
    transition: filter 0.2s;
    padding: 0.6rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    right: 2rem;
    top: 1.2rem;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #808080;
    }

    p {
      font-size: 1rem;
      color: #D9D9D9;
      margin-top: 1rem;
    }

  }

  .Btns {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    .noBtn {
      width: 80px;
      height: 100%;
      padding: 0.6rem;
      background: #d34444;
      color: #f2f2f2;
      border: none;
      border-radius: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.375rem;
      font-weight: 700;
      font-size: 0.875rem;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: #e25858;
      }
    }

    .yesBtn {
      width: 80px;
      height: 100%;
      padding: 0.6rem;
      background:#5e60ce;
      color: #f2f2f2;
      border: none;
      border-radius: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.375rem;
      font-weight: 700;
      font-size: 0.875rem;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: #8284fa;
      }
    }
    
  }

`;