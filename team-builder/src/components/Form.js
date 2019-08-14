import React, { useState } from 'react';

const Form = props => {
  const [info, setInfo] = useState({ name: "", email: "", role: "" });



  return (
    <form>
      <label htmlFor="name">Enter your Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={info.name}
      />

      <label htmlFor="email">Enter your Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={info.email}
      />
      <label htmlFor="role">Role</label>
      <select name="role">
        <option value={info.role}>Select</option>
        <option value={info.role}>Student</option>
        <option value={info.role}>Front-End</option>
        <option value={info.role}>Back-End</option>
        <option value={info.role}>Full-Stack</option>
        <option value={info.role}>Designer</option>
        <option value={info.role}>Dev Ops</option>
      </select>

      <button type="submit">Add</button>

    </form>
  )
}

export default Form;