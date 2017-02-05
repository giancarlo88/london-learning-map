import React, { Component } from 'react';
import { default as _ } from "lodash";
import './App.css';
import EntryMap from './entryMap.js';


class cms extends Component {
    constructor(props){
        super(props)
        this.state={
          authorized: false,
          markers: this.props.markers
        }
    }
    render() {
        return (
        <div>
          <EntryMap markers={this.props.markers} handleMapClick={this.handleMapClick}/>
          <button className='toggle-cms' onClick={this.props.toggleCMS}>Back to the map!</button>
        </div>
        )
    }
}
export default cms;