import React, { Component } from 'react';
import { default as _ } from "lodash";
import './App.css';
import EntryMap from './entryMap.js';

//import EntryForm from './entryForm.js';


class cms extends Component {
    constructor(props){
        super(props)
        this.state={markers: this.props.markers}
    }
//  constructor(){
//       super();
//       this.handleMapClick = this.handleMapClick.bind(this)
//   }
//   state = {
//     lat: "",
//     lng: ""
//   }
//   handleMapClick(e){
//       this.setState({
//           lat: e.latLng.lat(),
//           lng: e.latLng.lng()
//       })
//   }
    render() {
        return (
        <div>
        <EntryMap markers={this.props.markers} handleMapClick={this.handleMapClick} />
        </div>
        )
    }
}
export default cms;