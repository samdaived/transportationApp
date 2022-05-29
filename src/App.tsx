import React from 'react';
import style from './App.module.css';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={style.App}>
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
