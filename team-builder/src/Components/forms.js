import React, { useState } from "react";


function TheForm({setMember}) {
  const [user, setUser] = useState({ Name: "", Email: "", Role: ""});

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMember(user.Name);
    setUser({ Name: "", Email: "", Role: ""});
    // console.log(user.Name);
    // console.log(user.Email);
    // console.log(user.Role);
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
  