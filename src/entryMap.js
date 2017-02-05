import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader } from "react-google-maps";
import { default as _ } from "lodash";
import './App.css';
import $ from 'jquery';



class EntryMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: "",
      lng: "",
      title: "",
      info: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //let markers = this.props.markers;
    // console.log(markers)
    let data = 
      {
       "x-cord": this.state.lat, 
       "y-cord": this.state.lng,
       "key": "London", 
       "defaultAnimation": 2,
       "title": this.state.title,
       "info": this.state.info
     }
    $.ajax({
        url: "http://www.ggalliani.com/projects/llm/api.php/map",
        method: "POST",
        dataType: 'json',
        data: data,
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
    let name = e.target.name
    let value = e.target.value
      this.setState({
        [name] : value
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
    <input type="text" name='title' onChange={this.handleChange} className="title" value={this.state.title}/>
    <textarea value={this.state.desc} name='info' onChange={this.handleChange}></textarea>
    <input type="submit" className="submit" />
    </form>
    </div> 
    );
  }
}

export default EntryMap