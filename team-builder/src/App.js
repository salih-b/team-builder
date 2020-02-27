import React, { useState } from 'react';

import Form from './Components/forms';
import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  return (
    <div className="App">
      <h2>These are the members: {members}</h2>
      <Form setMember={setMembers}/>
    </div>
  );
}

export default App;
