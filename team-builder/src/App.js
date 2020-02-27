import React, { useState } from 'react';

import Form from './Components/forms';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  console.log("members from App", members);

  const addNewMember= user => {
    const newMember = {
      id: Date.now(),
      name: user.Name,
      email: user.Email,
      role: user.Role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h2>These are the members:</h2>
      <Members members={members}/>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}
const Members = (props) => {
  return (
    <div >
      {props.members.map(member => (
        <div className="note" key={member.id}>
          <h2>{member.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
