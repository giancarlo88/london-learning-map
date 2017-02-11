import React, { Component } from 'react';

class Info extends Component {
    state = {

    }
    render() {
        return <div className="infoWindow">
                <span className="close" onClick={this.props.onCloseclick}>&times;</span>
                <h1>{this.props.title}</h1>
                <p>{this.props.info}</p>
                </div>
    }
}

export default Info;