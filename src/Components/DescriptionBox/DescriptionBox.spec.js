import React from 'react'
import { shallow } from 'enzyme'

import DescriptionBox from './DescriptionBox'

describe(DescriptionBox.name, () => {
  const description = 'here is a description'
  const props = {
    description, 
    handleCloseClick: () => {}
  }

  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<DescriptionBox {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('@props', () => {
    it('should render prop text as text', () => {
      const wrapper = shallow(<DescriptionBox {...props} />)
      expect(wrapper.dive().find('p').text()).toBe(description)
    })
  })
})
