import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from "react-google-maps";
import { default as _ } from "lodash";
import './App.css';
import Info from './info.js';
import CMS from './CMS';
import $ from 'jquery';


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
  }

  getSavedPointers = () => {
    $.ajax({
      url: "api.php/map?transform=1",
      method: "GET",
      dataType: 'json',
      success: (data) => {
        this.setState({markers: data.map})
        },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
        this.setState({error: true})
      }
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
    return (
      <Info
        title={this.state.markers[ref].title}
        info={this.state.markers[ref].info}
        key={`${ref}_info_window`}
        onCloseclick={onCloseclick}
      >
      {this.state.markers[ref].info}
      </Info>
      )
  }

  render() {
    const {markers} = this.state
     return (
      <div>
      {!this.state.cms 
        && <GoogleMapLoader
              query={{ libraries: "geometry,drawing,places,visualization" }}
              containerElement={
                <div 
                  {...this.props}
                  style={{
                    height: `100vh`,
                    width: `100vw`
                  }}
                />
                }
              googleMapElement={
                <GoogleMap
                  ref={(map) => console.log(map)}
                  defaultZoom={12}
                  defaultCenter={{ lat: 51.511507, lng:-0.115705}}
                >
                  {markers.map((marker, index) => {
                    const ref = index;
                    const onClick = () => this.handleMarkerClick(marker);
                    return (
                      <Marker
                        icon={marker.showInfo ? 'assets/blue-pushpin.png' : null}
                        title={marker.title}
                        key={index}
                        position={ 
                          { lat: Number(marker['x-cord']), 
                            lng: Number(marker['y-cord'])
                          }
                        }
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
      {!this.state.cms && <button className='toggle-cms' disabled={this.state.error} onClick={this.toggleCMS}>Add a location...</button>}
      {this.state.cms && <CMS toggleCMS={this.toggleCMS} markers={this.state.markers} getSavedPointers={this.getSavedPointers}/> }
      {this.state.error && <div className='error'><div>Error loading map pointers from server</div></div>}
    </div>
    );
  }
}

export default Map;
