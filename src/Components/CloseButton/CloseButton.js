import React from 'react'
import styled from 'styled-components'

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
`

const CloseButton = ({ handleCloseClick }) => (
  <StyledCloseButton onClick={handleCloseClick}>&times;</StyledCloseButton>
)

export default CloseButton
