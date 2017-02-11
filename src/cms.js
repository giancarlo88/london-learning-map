import React, { Component } from 'react';
import { default as _ } from "lodash";
import './App.css';
import EntryMap from './entryMap.js';


class cms extends Component {
    constructor(props){
        super(props)
        this.state={
          authorized: false,
          markers: this.props.markers,
          success: false
        }
    }
    toggleSuccess = () => {
        this.setState({
            success: !this.state.success
        })
        setTimeout(() => this.setState({success: !this.state.success}), 1200)
    }
    render() {
        return (
        <div>
          <EntryMap 
            markers={this.props.markers}
            handleMapClick={this.handleMapClick}
            getSavedPointers={this.props.getSavedPointers}
            toggleSuccess={this.toggleSuccess}
          />
          <button className='toggle-cms' onClick={this.props.toggleCMS}>Take me back!</button>
          {this.state.success && <div>Submission successful!</div>}
        </div>
        )
    }
}
export default cms;