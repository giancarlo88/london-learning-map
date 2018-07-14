import React from 'react'
import styled from 'styled-components'

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2em;
  float: right;
  outline: none;
  padding-right: 0; 
  padding-left: 20px;

`

const CloseButton = ({ handleCloseClick }) => (
  <StyledCloseButton onClick={handleCloseClick}>&times;</StyledCloseButton>
)

export default CloseButton
