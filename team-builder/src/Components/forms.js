import React, { useState } from "react";


function TheForm({addNewMember}) {
  const [user, setUser] = useState({ Name: "", Email: "", Role: ""});

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };


  const handleSubmit = event => {
    // const memberList = [];
    // console.log("this is event on handleSubmit", event);
    event.preventDefault();
    // memberList.push(user.Name);
    addNewMember(user);
    // console.log("this is memberList", memberList);
    setUser({ Name: "", Email: "", Role: ""});
  };

  return (
    <div className="Form">
      {console.log("this is user from form.js", user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={user.Name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="Email"
            value={user.Email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="Role"
            value={user.Role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}
  
  export default TheForm;
  