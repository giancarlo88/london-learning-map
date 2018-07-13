import React from 'react'
import styled from 'styled-components'

const StyledMarker = styled.div`
  background-image: url(/marker.svg);
  background-size: cover;
  height: 30px;
  width: 20px;
`

const Marker = ({ lat, lng, index }) => (
  <StyledMarker lat={lat} lng={lng} index={index} />
)

export default Marker