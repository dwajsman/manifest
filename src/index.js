import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import UserProvider from './context/user-provider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
