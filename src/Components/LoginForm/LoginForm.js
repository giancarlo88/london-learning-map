import React from 'react'

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Username
      <input type="text" placeholder="foo1234" />
    </label>
    <label>
      Password
      <input type="password" placeholder="123456" />
    </label>
    <input type="submit" label="Log In" />
  </form>
)

export default LoginForm