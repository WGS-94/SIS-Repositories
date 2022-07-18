import { AuthProvider } from "./hooks/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from './routes/Routes';

import GlobalStyle from './globalStyle';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer 
        autoClose={3000} 
        className="toast-container"
      />
      <GlobalStyle />
    </Router>
  )
}

export default App;