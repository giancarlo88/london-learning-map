import React, { Component } from 'react'
import './App.css'
import MapContainer from './Containers/MapContainer/MapContainer'
import AddMarkerContainer from './Containers/AddMarkerContainer/AddMarkerContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAddingMarker: false
    }
  }

  toggleAdminPanel = () =>
    this.setState({ isAddingMarker: !this.state.isAddingMarker })

  render() {
    const { isAddingMarker } = this.state
    return isAddingMarker ? (
      <AddMarkerContainer toggleAdminPanel={this.toggleAdminPanel} />
    ) : (
      <MapContainer toggleAdminPanel={this.toggleAdminPanel} />
    )
  }
}

export default App
