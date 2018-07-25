import React, { Component } from 'react'
import './App.css'
import MapContainer from './Containers/MapContainer/MapContainer'
import AddMarkerContainer from './Containers/AddMarkerContainer/AddMarkerContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAdminPanelActive: false
    }
  }

  toggleAdminPanel = () =>
    this.setState({ isAdminPanelActive: !this.state.isAdminPanelActive })

  render() {
    const { isAdminPanelActive } = this.state
    return isAdminPanelActive ? (
      <AddMarkerContainer toggleAdminPanel={this.toggleAdminPanel} />
    ) : (
      <MapContainer toggleAdminPanel={this.toggleAdminPanel} />
    )
  }
}

export default App
