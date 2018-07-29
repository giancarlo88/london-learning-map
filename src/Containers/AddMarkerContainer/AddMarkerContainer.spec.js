import React from 'react'
import { shallow } from 'enzyme'
import AddMarkerContainer from './AddMarkerContainer'

describe('AddMarkerContainer', () => {
  describe('@renders', () => {
    describe('with default conditions', () => {
      const wrapper = shallow(<AddMarkerContainer />)
      
      it('should render', () => {
        expect(wrapper).toMatchSnapshot()
      })

      it('should render a LoginForm', () => {
        expect(wrapper.find('LoginForm')).toHaveLength(1)
      });
    })

    describe('when state property isAuthenticated is true', () => {
      const wrapper = shallow(<AddMarkerContainer />)
      wrapper.setState({isAuthenticated: true})
      it('should render a AddMarkerForm', () => {
        expect(wrapper.find('AddMarkerForm')).toHaveLength(1)
      });
    });

  })
})
