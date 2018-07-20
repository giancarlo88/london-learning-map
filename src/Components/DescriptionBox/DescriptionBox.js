import React from 'react'
import PropTypes from 'prop-types'
import styled from '../../../node_modules/styled-components'
import CloseButton from '../CloseButton/CloseButton'

const StyledDescriptionBox = styled.div`
  background-color: white;
  bottom: 10px;
  height: 30vh;
  left: 10px;
  position: fixed;
  padding: 20px;
  right: 10px;

  @media (min-width: 480px) {
    bottom: initial;
    left: initial;
    height: auto;
    top: 10px;
    width: 45%;
    transition: height 2s ease-out;
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`

const Text = styled.p`
  margin: 0;
`

const Title = styled.h1`
  margin-top: 0;
`
const DescriptionBox = ({ description, title, handleCloseClick, index }) => (
  <StyledDescriptionBox>
    <CloseButton handleCloseClick={() => handleCloseClick(index)} />
    <Title>{title}</Title>
    <Text>{description}</Text>
  </StyledDescriptionBox>
)

DescriptionBox.propTypes = {
  description: PropTypes.string.isRequired,
  handleCloseClick: PropTypes.func.isRequired
}

export default DescriptionBox
