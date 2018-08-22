import React from 'react'

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
    <input type="submit" label="Log In" />
  </form>
)

export default LoginForm
