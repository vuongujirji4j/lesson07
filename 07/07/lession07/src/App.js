import React from 'react';
import './App.css';
import TDTuseState from './components/TDTuseState';
import TDTUseEffect from './components/TDTUseEffect';
import TDTUseContext from './components/TDTUseContext';
import './App.css'

function App() {
  return (
    <div className="container border mt-3">
      <h1 className="text-container">truong dinh tuyen - hook</h1>
      <hr />
      <TDTuseState />
      <hr />
      <TDTUseEffect />
      <hr />
     <TDTUseContext />
    </div>
  );
}

export default App;