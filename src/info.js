import React from 'react';
import renderHTML from 'react-render-html'


const Info = props => {
        return <div className="info-window">
                <span className="close" onClick={props.onCloseclick}>&times;</span>
                <h1>{props.title}</h1>
                <p>{renderHTML(props.info)}</p>
                </div>
    }

export default Info;