import React from 'react'
import styled from 'styled-components'

const StyledMarker = styled.div`
  background-color: red;
  height: 50px;
  width: 10px;
`

const Marker = ({ lat, lng, index }) => (
  <StyledMarker lat={lat} lng={lng} index={index} />
)

export default Marker