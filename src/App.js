import React from 'react'
import Transition from './TransitionContainer'
import Map from './Map'

const App = props => {
  return (
    <Transition>
      <Map />
    </Transition>
  )
}

export default App