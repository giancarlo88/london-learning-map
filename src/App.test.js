import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe(App.name, () => {
  describe('@renders', () => {
    it('should match a snapshot', () => {
      const wrapper = shallow(<App />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
