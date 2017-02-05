import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from "react-google-maps";
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
      info: "", 
      username: "", 
      password: "", 
      markers: []
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.authenticate()
    .catch((err)=> console.log(err))
  }

  authenticate = () => {
    let authentication = {
      "username": this.state.username, 
      "password": this.state.password
    }

    return $.ajax({
        url: "http://www.ggalliani.com/projects/llm/auth/api.php/",
        method: "POST",
        data: authentication,
        success: (data) => {
          console.log(data)
          return this.logMapPoint(data)
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
          }
      })
  }
  logMapPoint = (auth) => {
    console.log(auth)
    let data = 
      {
       "x-cord": this.state.lat, 
       "y-cord": this.state.lng,
       "key": "London", 
       "defaultAnimation": 2,
       "title": this.state.title,
       "info": this.state.info, 
     }

     return $.ajax({
        url: `http://www.ggalliani.com/projects/llm/auth/api.php/map?csrf=${auth}`,
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
    let marker = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    let markerArray = [marker]
      this.setState({
          ...marker, 
          markers: markerArray
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
    const {markers} = this.state
     return (    
      <div>
      <GoogleMapLoader
        query={{ libraries: "geometry,drawing,places,visualization" }}
        containerElement={
          <div 
            {...this.props}
            style={{
              height: `300px`,
              width: `100%`
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={12}
            defaultCenter={{ lat: 51.511507, lng:-0.115705}}
            onClick={this.handleMapClick}
          >
          {markers.map((marker, index) => {
                    const ref = index;
                    return (    
                      <Marker
                        key={index}
                        position={ 
                          { lat: marker.lat, 
                            lng: marker.lng
                          }
                        }
                      >
                        {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
          </Marker>
            )}
          )}
          </GoogleMap> 
         }
     
      />
    <form className="submission-form" onSubmit={this.handleSubmit}>
      {this.state.lat && this.state.lng && 
        <div className="coords">{this.state.lat}, {this.state.lng}</div>
      }
      <input type="hidden" className="lat" value={this.state.lat} />
      <input type="hidden" className="lng" value={this.state.lng} />
      <input type="text" name='title' placeholder="Location Name" onChange={this.handleChange} className="title" value={this.state.title}/>
      <textarea value={this.state.desc} placeholder="Enter a description..." name='info' onChange={this.handleChange}></textarea>
      <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
      <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
      <input type="submit" className="submit" />
    </form>
    </div> 
    );
  }
}

export default EntryMap