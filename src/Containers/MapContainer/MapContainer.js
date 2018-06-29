import React, { Component } from 'react'
import { Map } from '../../Components/Map/Map'

const fetchData = async () =>
  fetch(`${process.env.REACT_APP_ENDPOINT_URL}/locations`)
    .then(data => data.json())
    .catch(err => console.warn(err))

export default class MapContainer extends Component {
  constructor() {
    super()
    this.state = { 
      data: []
    }
  }

  async componentDidMount() { 
    const data = await fetchData()
    this.setState({data})
  }

  render() {
    return <Map data={this.state.data} />
  }
}
