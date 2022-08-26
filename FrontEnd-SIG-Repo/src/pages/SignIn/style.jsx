import styled from 'styled-components';

export const MainSignIn = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid #fff; */
  background: var(--gray-700);

  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

`;

export const MainSignInLeft = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red; */

  > div {

    h1 {
      font-size: 3vw;
      color: #77ffc0;
    }
  }

  img {
    width: 30vw;
  }

 @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;

    div {
      margin-top: 2rem;
    }

    h1, h2 {
      display: none;
    }

    img {
      width: 28%;
    }
  }

`;

export const MainSignInRignt = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid #fff; */

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const MainSignInRigntContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 35px;
  background: var(--gray-900);
  border-radius: 20px;

  border: 1px solid orange;

  > h1 {
      color: var(--title);
      font-size: 3rem;
      font-weight: 800;
      margin: 0;
      text-align: center;
      margin-bottom: 1rem;
    }

  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--gray-900);
    border-radius: 20px;
    /*box-shadow: 0px 10px 40px #00000056;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);*/

    border: 1px solid #fff;

  > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 10px;

      
      
      > input {
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 15px;
          background: var(--gray-700);
          color: #f0ffffde;
          font-size: 12pt;
          /*box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);*/
          outline: none;
          box-sizing: border-box;

          &:focus {
              border: 1px solid var(--title);
            }
          &::placeholder {
              color: #f0ffff94;
            }
        }

      > label {
        color:#f0ffffde;
        margin-bottom: 10px;
      }
    }

    > button {
        width: 100%;
        padding: 16px 0;
        margin: 25px;
        border: none;
        border-radius: 8px;
        outline: none;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 3px;
        color: #2b134b;
        background: var(--title);
        cursor: pointer;
        box-shadow: 0px 10px 40px -12px #00ff8052;
    }

  }

  @media only screen and (max-width: 950px) {
      width: 85%;
    }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;

    input {
      height: 40px;
    }
  }
  
`;

export const MainSignInLink = styled.div`
  
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: #f0ffffde;
  }

  span {
    font-size: 0.8rem;
    font-weight: 800;
    text-decoration: none;
    color: var(--title);
  }

`;
