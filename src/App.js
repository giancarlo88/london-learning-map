import React from 'react'
import Transition from './TransitionContainer'
import Map from './Map'

const App = props => {
  return (
    <Transition>
      <Map key={1}/>
    </Transition>
  )
}

export default App