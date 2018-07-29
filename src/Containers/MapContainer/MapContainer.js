import React, { Component } from 'react'
import MapComponent from '../../Components/Map/Map'
import { get } from '../../Services/api'

export default class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      selectedMarker: null
    }
  }

  handleMarkerClick = index => {
    const { selectedMarker } = this.state
    this.setState({
      selectedMarker: index === selectedMarker ? null : index
    })
  }

  async componentDidMount() {
    try {
      const data = await get(`${process.env.REACT_APP_ENDPOINT_URL}/locations`)
      this.setState({ data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { selectedMarker } = this.state
    return (
      <MapComponent
        data={this.state.data}
        selectedMarker={selectedMarker}
        handleClick={this.handleMarkerClick}
        {...this.props}
      />
    )
  }
}
