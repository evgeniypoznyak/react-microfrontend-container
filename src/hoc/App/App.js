import React from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

function App({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default App;
