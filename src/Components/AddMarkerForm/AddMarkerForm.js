import React from 'react'
import GoogleMapsReact from 'google-map-react'
import styled from 'styled-components'
import Marker from '../Marker/Marker'
import Button from '../Button/Button'
import StyledInput from '../Input/Input'
import TextArea from '../TextArea/TextArea'
import InputContainer from '../InputContainer/InputContainer'

const StyledInputMap = styled.div`
  height: 100vh;
  width: 100vw;
`

const StyledTextArea = styled(TextArea)`
  height: 150px;
  display: block;
  width: 80%
`

const StyledForm = styled.form`
  background-color: ${props => props.theme.white};
  bottom: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 10px;
  right: 10px;
  padding: 10px;
`

const AddMarkerForm = ({
  handleMapClick,
  handleSubmit,
  handleChange,
  xCord,
  yCord,
  title,
  info
}) => {
  return (
    <StyledInputMap>
      <GoogleMapsReact
        onClick={handleMapClick}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 51.5199975, lng: -0.1003068 }}
        defaultZoom={13}
      >
        {xCord && yCord ? <Marker lat={xCord} lng={yCord} /> : null}
      </GoogleMapsReact>
      <StyledForm onSubmit={handleSubmit} onChange={handleChange}>
        <InputContainer>
          <label>
            Location Title
            <StyledInput type="text" name="title" value={title} />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Description
            <StyledTextArea name="info" value={info} />
          </label>
        </InputContainer>
        <Button handleClick={handleSubmit}>Submit!</Button>
      </StyledForm>
    </StyledInputMap>
  )
}

export default AddMarkerForm
