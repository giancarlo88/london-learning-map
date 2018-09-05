import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  outline: none;
  background-color: ${props => props.theme.secondaryColor};
  border: 0;
  border-bottom: 2px solid #8aa4a8;
  border-right: 2px solid #8aa4a8;
  border-radius: 10px;
  height: 30px;
  font-family: Raleway, sans-serif;
  width: 100px;
  color: ${props => props.theme.textColor};
`

const FixedButton = styled(StyledButton)`
  position: fixed;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: 2;
`

const Button = ({ handleClick, children, isFixed, top, left }) =>
  isFixed ? (
    <FixedButton onClick={handleClick} top={top} left={left}>
      {children}
    </FixedButton>
  ) : (
    <StyledButton onClick={handleClick}>{children}</StyledButton>
  )

export default Button
