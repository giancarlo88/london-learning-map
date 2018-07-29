import React from 'react'
import GoogleMapsReact from 'google-map-react'
import styled from 'styled-components'
import Marker from '../Marker/Marker'

const StyledInputMap = styled.div`
  height: 100vh;
  width: 100vw;
`

const StyledForm = styled.form`
  position: absolute;
  bottom: 20px;
`

const AddMarkerForm = ({
  handleMapClick,
  handleSumbit,
  handleChange,
  xCord,
  yCord,
  title,
  info,
  mapRef
}) => {
  return (
    <StyledInputMap>
      <GoogleMapsReact
        onClick={handleMapClick}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 51.5199975, lng: -0.1003068 }}
        defaultZoom={13}
        ref={mapRef}
      >
        {xCord && yCord ? <Marker lat={xCord} lng={yCord} /> : null}
      </GoogleMapsReact>
      <StyledForm onSubmit={handleSumbit} onChange={handleChange}>
        <input type="text" name="title" value={title} />
        <textarea name="info" value={info} />
      </StyledForm>
    </StyledInputMap>
  )
}

export default AddMarkerForm
