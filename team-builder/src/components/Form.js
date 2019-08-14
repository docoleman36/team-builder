import React, { useState } from 'react';

const Form = props => {
  const [info, setInfo] = useState({ name: "", email: "", role: "" });

  const changeHandler = event => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...info,
      id: Date.now()
    };
    // setInfo()
    props.addNewMember(newMember);
    setInfo({ name: "", email: "", role: "" })
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Enter your Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={info.name}
        onChange={changeHandler}
      />

      <label htmlFor="email">Enter your Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={info.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        placeholder="Enter your Role"
        value={info.role}
        onChange={changeHandler}
      />

      <button type="submit">Add</button>

    </form>
  )
}

export default Form;