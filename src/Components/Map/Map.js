import React from 'react'
import GoogleMapsReact from 'google-map-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Marker from '../Marker/Marker'
import DescriptionBox from '../DescriptionBox/DescriptionBox'

const StyledMap = styled.div`
  height: 100vh;
  width: 100vw;
`

const MapComponent = ({ data = [], handleClick, selectedMarker, toggleAdminPanel }) => {
  const dataForSelectedMarker =
    data.find(({ index }) => index === selectedMarker) || {}
  const { title, info } = dataForSelectedMarker

  return (
    <StyledMap>
      <button onClick={toggleAdminPanel}>Add a pointer</button>
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
              isSelected={index === selectedMarker}
            />
          )
        })}
      </GoogleMapsReact>
      {selectedMarker && <DescriptionBox description={info} title={title} index={selectedMarker} handleCloseClick={handleClick}/>}
    </StyledMap>
  )
}

MapComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      'x-cord': PropTypes.number,
      'y-cord': PropTypes.number,
      index: PropTypes.number,
      defaultAnimation: PropTypes.number,
      mapkey: PropTypes.number,
      title: PropTypes.string,
      info: PropTypes.string
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedMarker: PropTypes.number
}

export default MapComponent
