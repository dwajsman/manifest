import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import './index.css';
import { db, FieldValue, firebase } from './lib/utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue, db }}>
    <App />
  </FirebaseContext.Provider>
);
