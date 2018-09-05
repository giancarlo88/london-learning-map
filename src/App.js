import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './Theme'
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
    return (
      <ThemeProvider theme={theme}>
        {isAddingMarker ? (
          <AddMarkerContainer toggleAdminPanel={this.toggleAdminPanel} />
        ) : (
          <MapContainer toggleAdminPanel={this.toggleAdminPanel} />
        )}
      </ThemeProvider>
    )
  }
}

export default App
