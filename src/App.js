import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from "react-google-maps";
import { default as _ } from "lodash";
import './App.css';
import Info from './info.js';
import CMS from './cms.js';
import $ from 'jquery';


class Map extends Component {
  state = {
    markers: []
  }
  handleMarkerClick(targetMarker) {
  this.setState({
    markers: this.state.markers.map(marker => {
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
  handleMarkerClose(targetMarker) {
    this.setState({
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
  componentDidMount(){
    $.ajax({
        url: "map-pointers.json",
        method: "GET",
        dataType: 'json',
        success: function(data) {
        this.setState({markers: data.markers})
          }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
          }.bind(this)
        })
  }
  renderInfoWindow(ref, marker) {
    const onCloseclick = this.handleMarkerClose.bind(this, marker);
    console.log(ref)
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
      <GoogleMapLoader
        query={{ libraries: "geometry,drawing,places,visualization" }}
        containerElement={
          <div 
            {...this.props}
            style={{
              height: `600px`
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
                  icon={marker.showInfo ? '/assets/blue-pushpin.png' : null}
                  title={marker.title}
                  key={index}
                  position={marker.position}
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
      <CMS/>
      </div>
    );
  }
}

export default Map;
