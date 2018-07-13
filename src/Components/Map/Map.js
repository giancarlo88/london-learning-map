import React from 'react'
import GoogleMapsReact from 'google-map-react'
import styled from 'styled-components'
import Marker from '../Marker/Marker'

const StyledMap = styled.div`
  height: 100vh;
  width: 100vw;
`

const MapComponent = ({ data, handleClick }) => (
  <StyledMap>
    <GoogleMapsReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      defaultCenter={{ lat: 51.5199975, lng: -0.1003068 }}
      defaultZoom={13}
    >
      {data.map(({ _id, index, ...rest }) => {
        return (
          <Marker
            key={_id}
            index={index}
            lat={rest['x-cord']}
            lng={rest['y-cord']}
            handleClick={handleClick}
          />
        )
      })}
    </GoogleMapsReact>
  </StyledMap>
)

export default MapComponent
