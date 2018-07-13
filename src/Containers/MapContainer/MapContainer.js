import React, { Component } from 'react'
import Map from '../../Components/Map/Map'
import { get } from '../../Services/api'

export default class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      data: [], 
      selectedMarker: null
    }
  }

  handleMarkerClick = (index) => {
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
    return <Map data={this.state.data} handleClick={this.handleMarkerClick}/>
  }
}
