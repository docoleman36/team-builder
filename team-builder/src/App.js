import React, { useState } from 'react';
import ReactDOM from "react-dom";

import Form from './components/Form';
import Team from './components/Team';

import data from "./data";

import './App.css';

function App() {
  const [team, setTeam] = useState(data);

  const addNewMember = value => {
    setTeam([...team, value]);
  }

  return (
    <div className="App">
      <h1>My list of teammates</h1>
      <Form addNewMember={addNewMember} />
      <Team teamList={team} />
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);