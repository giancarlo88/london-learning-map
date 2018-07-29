import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMarker = styled.div`
  background-image: url(/marker.svg);
  background-size: cover;
  cursor: pointer;
  height: 30px;
  transform: ${props =>
    props.isSelected ? 'scale3d(1.3, 1.3, 1.3)' : 'scale3d(1, 1, 1)'} translate(-50%, -50%);
  transition: transform 200ms ease-out;
  width: 20px;
`

const Marker = ({ lat, lng, index, handleClick, isSelected }) => (
  <StyledMarker
    isSelected={isSelected}
    lat={lat}
    lng={lng}
    index={index}
    onClick={() => handleClick(index)}
  />
)

Marker.propTypes = {
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  selected: PropTypes.bool
}

Marker.defaultProps = { 
  handleClick: () => {}
}

export default Marker
