import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe(App.name, () => {
  describe('@renders', () => {
    describe('with default conditions', () => {
      const wrapper = shallow(<App />)
      it('should render', () => {
        expect(wrapper).toMatchSnapshot()
      })

      it('should render a MapContainer', () => {
        expect(wrapper.find('MapContainer')).toHaveLength(1)
      })
    })

    describe('when state property isAddingMarker is true', () => {
      it('should render an AddMarkerContainer', () => {
        const wrapper = shallow(<App />)
        wrapper.setState({ isAddingMarker: true })
        expect(wrapper.find('AddMarkerContainer')).toHaveLength(1)
      })
    })
  })

  describe('@methods', () => {
    describe('toggleAdminPanel', () => {
      it('should change the isAddingMarker state property', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.state().isAddingMarker).toBeFalsy()
        wrapper.instance().toggleAdminPanel()
        expect(wrapper.state().isAddingMarker).toBeTruthy()
      })
    })
  })
})
