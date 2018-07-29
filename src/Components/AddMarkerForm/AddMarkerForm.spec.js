import { shallow } from 'enzyme'
import React from 'react'
import AddMarkerForm from './AddMarkerForm'

describe(AddMarkerForm.name, () => {
  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<AddMarkerForm />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
