import React, { Component } from 'react'
import { GoogleMap, GoogleMapLoader, Marker } from "react-google-maps"
import { default as _ } from "lodash"
import './App.css'
import Info from './info'
import CMS from './CMS'
// import $ from 'jquery'
import Transition from './TransitionContainer'

class Map extends Component {
  constructor(){
    super()
    this.state = {
      markers: [],
      cms: false,
      error: false
    }
  }

  componentDidMount(){
    this.getSavedPointers()
    console.log('A project by Giancarlo Galliani :)')
  }

  getSavedPointers = () => {
    fetch('http://llm-server-dev.eu-west-1.elasticbeanstalk.com/locations')
      .then((data) => data.json())
      .then((data) => this.setState({
        markers: data
      }))
      .catch((err) => {
        this.setState({
          error: true
        })
        throw new Error(err)
      })
  }

  handleMarkerClick (targetMarker) {
    this.setState({
      // Iterate through markers and return the one that was selected
      markers: this.state.markers.map( marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
            opacity:.5,
          };
        } else {
          return {
            ...marker,
            showInfo: false,
            opacity: 0.5
          }
        }
      }),
    });
  }

  handleMarkerClose (targetMarker) {
    this.setState({
      // Iterate through markers and return the one that was selected
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  toggleCMS = () => {
    this.setState({
      cms: !this.state.cms
    })
  }

  renderInfoWindow(ref, marker) {
    const onCloseclick = this.handleMarkerClose.bind(this, marker);
    let info = this.state.markers[ref].info.replace(/\r?\n/g,'<br/>')
    return (
      <Info
        title={this.state.markers[ref].title}
        info={info}
        key={`${ref}_info_window`}
        onCloseclick={onCloseclick}
      />
      )
  }

  render() {
    const {markers} = this.state
     return (
      <Transition>
        {!this.state.cms &&
          <GoogleMapLoader
              query={{ libraries: "geometry,drawing,places,visualization" }}
              containerElement={ <div {...this.props} style={{height: `100vh`, width: `100vw`}} />}
              googleMapElement={
                <GoogleMap
                  defaultZoom={13}
                  defaultCenter={{ lat: 51.5199975, lng:-0.1003068}}
                  options={{
                    scaleControl: true,
                    tiltControl: true,
                    tilt: 45
                  }}
                >
                  {markers.map((marker, index) => {
                    const ref = index;
                    const onClick = () => this.handleMarkerClick(marker);
                    return (
                      <Marker
                        icon={marker.showInfo ? 'assets/blue-pushpin.png' : null}
                        title={marker.title}
                        key={index}
                        position={{
                          lat: Number(marker['x-cord']),
                          lng: Number(marker['y-cord'])
                        }}
                        onClick={onClick}
                      >
                        {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                      </Marker>
                    )
                  }
                )}
              </GoogleMap>
            }
        />
      }

      {!this.state.cms &&
        <Transition>
          <button className='toggle-cms' disabled={this.state.error} onClick={this.toggleCMS}>Add a location...</button>
        </Transition>
      }

      {this.state.cms &&
        <CMS toggleCMS={this.toggleCMS} markers={this.state.markers} getSavedPointers={this.getSavedPointers}/>

      }

      {this.state.error &&
        <div className='error'><div>Error loading map pointers from server</div></div>
      }
    </Transition>
    )
  }
}

export default Map;
