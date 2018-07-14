import React from 'react'
import PropTypes from 'prop-types'
import styled from '../../../node_modules/styled-components';
import CloseButton from '../CloseButton/CloseButton';


const StyledDescriptionBox = styled.div`
  background-color: white;
  position: fixed;
  right: 10px; 
  left: 10px;
  bottom: 10px;
  height: 30vh;

  @media (min-width: 480px) {
    bottom: initial; 
    left: initial;
    height: 75vh;
    top: 10px;
    width: 45%
  }

  @media (min-width: 768px) { 
    width: 30%;
  }
`

const DescriptionBox = ({description, title}) => (
  <StyledDescriptionBox>
    <CloseButton />
    <h1>{title}</h1>
    <p>{description}</p>
  </StyledDescriptionBox>
)

DescriptionBox.propTypes = { 
  description: PropTypes.string.isRequired
}

export default DescriptionBox