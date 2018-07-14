import React from 'react'
import PropTypes from 'prop-types'
import styled from '../../../node_modules/styled-components';
import CloseButton from '../CloseButton/CloseButton';


const StyledDescriptionBox = styled.div`
  background-color: white;
  bottom: 10px;
  height: 30vh;
  left: 10px;
  position: fixed;
  padding: 10px;
  right: 10px; 

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

const DescriptionBox = ({description, title, handleCloseClick, index}) => (
  <StyledDescriptionBox>
    <CloseButton handleCloseClick={() => handleCloseClick(index)}/>
    <h1>{title}</h1>
    <p>{description}</p>
  </StyledDescriptionBox>
)

DescriptionBox.propTypes = { 
  description: PropTypes.string.isRequired,
  handleCloseClick: PropTypes.func.isRequired
}

export default DescriptionBox