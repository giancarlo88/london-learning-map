import React, { Component } from 'react';
import { default as _ } from "lodash";
import './App.css';
import EntryMap from './entryMap.js';
import Login from './Login'
import $ from 'jquery'
//import EntryForm from './entryForm.js';


class cms extends Component {
    constructor(props){
        super(props)
        this.state={
          authorized: false,
          markers: this.props.markers
        }
    }
    handleLogin = (formData) => {
       $.ajax({
        url: "http://www.ggalliani.com/projects/llm/add.php/",
        method: "POST",
        data: formData,
        success: (data) => {
        console.log(data)
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
          }
        })
    }
    render() {
        return (
        <div>
          {!this.state.authorized 
            && <Login handleLogin={this.handleLogin}/>
          }
          {this.state.authorized 
            && <EntryMap markers={this.props.markers} handleMapClick={this.handleMapClick} />
          }
        </div>
        )
    }
}
export default cms;