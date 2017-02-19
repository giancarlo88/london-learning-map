import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const Transition = props => { 
  return (
    <ReactCSSTransitionGroup
      transitionName='fade'
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={true}
      transitionEnterTimeout={1000}
      transitionLeave={true}
      transitionLeaveTimeout={200}
    >
      { props.children }
    </ReactCSSTransitionGroup>
  )
}

export default Transition