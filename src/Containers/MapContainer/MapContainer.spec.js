import React from 'react'
import { shallow } from 'enzyme'

import MapContainer from './MapContainer'

jest.mock('../../Services/api', () => ({
  get: jest.fn() 
}))

describe(MapContainer.name, () => {
  describe('@renders', () => {
    it('should match a snapshot', async () => {
      const wrapper = await shallow(<MapContainer />)
      await expect(wrapper).toMatchSnapshot()
    })
  })
})
