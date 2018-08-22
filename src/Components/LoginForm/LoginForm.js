import React from 'react'
import Button from '../Button/Button';

const LoginForm = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Username
      <input
        name="username"
        onChange={handleChange}
        type="text"
        placeholder="foo1234"
      />
    </label>
    <label>
      Password
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="123456"
      />
    </label>
    <Button handleClick={handleSubmit}>Log In</Button>
  </form>
)

export default LoginForm
