import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --background: #201b2c;
  --white: #fff;
  --gray-100: #F2F2F2;
  --gray-200: #D9D9D9;
  --gray-300: #808080; 
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1A1A1A; 
  --gray-700: #0D0D0D;
  --gray-900: #121214;

  --blue-dark: #1E6F9F;
  --blue: #4EA8DE;

  --purple-dark: #5E60CE;
  --purple: #8284FA;

  --purple-rose: #2f2841;
  --title: #00ff88;

  --danger: #E25858;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-500);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: 'Noto Sans', sans-serif;
  background: var(--gray-700);
  color: var(--gray-100);
  -webkit-font-smoothing: antialiazed;
}

body, input, textarea, button {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 1rem;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

button {
  cursor: pointer;
}

/* Estilos do Modal */
.react-modal-overlay {
  background: rgba(0,0,0,0.8);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  //max-width: 576px;
  max-width: 676px;
  //height: 376px;
  background: #262626;
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
}

`

export default GlobalStyle;