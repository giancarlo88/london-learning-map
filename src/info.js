import React from 'react';

const Info = props => {
        return <div className="info-window">
                <span className="close" onClick={props.onCloseclick}>&times;</span>
                <h1>{props.title}</h1>
                <p>{props.info}</p>
                </div>
    }

export default Info;