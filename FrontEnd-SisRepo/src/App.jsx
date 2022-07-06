import { AuthProvider } from "./hooks/auth";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/Routes';

import './globalStyle.css';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  )
}

export default App;