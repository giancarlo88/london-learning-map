import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader } from "react-google-maps";
import { default as _ } from "lodash";
import './App.css';
import $ from 'jquery';

//import $ from 'jquery';


class EntryMap extends Component {
  state = {
    lat: "",
    lng: "",
    title: "",
    desc: ""
  }
  handleSubmit = (e) => {
    let markers = this.props.markers;
    console.log(markers)
    markers.push(
      {
       "position": {
         "lat": this.state.lat, 
         "lng": this.state.lng
       },
       "key": "London", 
       "defaultAnimation": 2,
       "title": "Test",
       "info": "TEST!"
     }
    )
    $.ajax({
        url: "assets/",
        method: "POST",
        data: markers,
        dataType: 'json',
        success: (data) => {
        console.log(data)
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
          }
        })
  }
  handleMapClick = (e) => {
      this.setState({
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
      })
    }
  handleChange = (e) => {
      this.setState({

      })
    }
  render() {
    //const {markers} = this.state
     return (    
      <div>
      <GoogleMapLoader
        query={{ libraries: "geometry,drawing,places,visualization" }}
        containerElement={
          <div 
            {...this.props}
            style={{
              height: `300px`,
              width: `300px`
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={12}
            defaultCenter={{ lat: 51.511507, lng:-0.115705}}
            onClick={this.handleMapClick}
          />
         
            // {markers.map((marker, index) => {
            //   const ref = index;
            //   const onClick = () => this.handleMarkerClick(marker);
            //   return (
              
            //     <Marker
            //       icon={marker.showInfo ? '/assets/blue-pushpin.png' : null}
            //       title={marker.title}
            //       key={index}
            //       position={marker.position}
            //       onClick={onClick}
            //     >
            //       {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
            //       </Marker>
            //   )
            // }
            // )}
          //</GoogleMap>
          
         }
     
      />
    <form onSubmit={this.handleSubmit}>
    <input type="text" className="lat" value={this.state.lat} />
    <input type="text" className="lng" value={this.state.lng} />
    <input type="text" onChange={this.handleChange} className="title" />
    <input type="submit" className="submit" />
    <textarea onChange={this.handleChange}></textarea>
    </form>
    </div> 
    );
  }
}

export default EntryMap