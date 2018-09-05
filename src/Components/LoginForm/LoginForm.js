import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import Input from '../Input/Input';
import InputContainer from '../InputContainer/InputContainer'

const StyledFormContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const StyledForm = styled.form`
  max-width: 400px;
`

const LoginForm = ({ handleChange, handleSubmit }) => (
  <StyledFormContainer>
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <label>
          Username
          <Input
            name="username"
            onChange={handleChange}
            type="text"
          />
        </label>
      </InputContainer>
      <InputContainer>
        <label>
          Password
          <Input
            name="password"
            onChange={handleChange}
            type="password"
          />
        </label>
      </InputContainer>
      <Button handleClick={handleSubmit}>Log In</Button>
    </StyledForm>
  </StyledFormContainer>
)

export default LoginForm
