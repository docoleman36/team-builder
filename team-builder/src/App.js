import React, { useState } from 'react';

import Form from './components/Form';

import data from "./data";

import './App.css';

function App() {
  const [team, setTeam] = useState(data);

  return (
    <div className="App">
      <h1>My list of teammates</h1>
      <Form />
    </div>
  );
}

export default App;
