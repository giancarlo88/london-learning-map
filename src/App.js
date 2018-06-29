import React, { Component } from 'react';
import './App.css';
import MapContainer from './Containers/MapContainer/MapContainer';

class App extends Component {
  render() {
    console.log(process.env)
    return (
      <MapContainer/>
    );
  }
}

export default App;
