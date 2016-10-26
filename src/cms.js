import React, { Component } from 'react';
import { default as _ } from "lodash";
import './App.css';
import EntryMap from './entryMap.js';
//import EntryForm from './entryForm.js';


class cms extends Component {
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
        <EntryMap handleMapClick={this.handleMapClick} />
        </div>
        )
    }
}
export default cms;