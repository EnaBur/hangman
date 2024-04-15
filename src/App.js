import React from "react";
import Abc from './components/Abc.js';
import Term from './components/Term.js';
import Nav from './components/Nav.js';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Term></Term>
      <Abc></Abc>
    </div>
  );
}

export default App;
