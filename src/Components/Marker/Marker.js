import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMarker = styled.div`
  background-image: url(/marker.svg);
  background-size: cover;
  height: 30px;
  width: 20px;
`

const Marker = ({ lat, lng, index, handleClick }) => (
  <StyledMarker lat={lat} lng={lng} index={index} onClick={() => handleClick(index)}/>
)

Marker.propTypes = { 
  index: PropTypes.number.isRequired, 
  handleClick: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired, 
  lng: PropTypes.number.isRequired, 
}

export default Marker