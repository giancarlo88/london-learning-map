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

  describe('@methods', () => {
    describe('handleMarkerClick', () => {
      describe('when a marker is not selected', () => {
        it('should set the selectedMarker state to the index clicked', () => {
          const wrapper = shallow(<MapContainer />)
          expect(wrapper.state().selectedMarker).toBeFalsy()
          const index = 1
          wrapper.instance().handleMarkerClick(index)
          expect(wrapper.state().selectedMarker).toBe(index)
        })
      })
    })

    describe('when a passed the same index that is selected', () => {
      it('should set the selectedMaker state to null ', () => {
        const wrapper = shallow(<MapContainer />)
        const index = 1
        wrapper.setState({
          selectedMarker: index
        })
        wrapper.instance().handleMarkerClick(index)
        expect(wrapper.state().selectedMarker).toBe(null)
      })
    })

    describe('when passed a different index than what is selected', () => {
      it('should set the selectedMarker state to the index clicked', () => {
        const wrapper = shallow(<MapContainer />)
        wrapper.setState({
          selectedMarker: 2
        })
        const index = 1
        wrapper.instance().handleMarkerClick(index)
        expect(wrapper.state().selectedMarker).toBe(index)
      })
    });
  })
})
