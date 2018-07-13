import React from 'react'
import { shallow } from 'enzyme'

import MapComponent from './Map'

describe(MapComponent.name, () => {
  const defaultProps = {
    data: [],
    handleClick: () => {}
  }
  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<MapComponent {...defaultProps} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a <Marker /> for each entry in the data prop', () => {
      const data = [
        {
          _id: 1,
          index: 0,
          'x-cord': 1234,
          'y-cord': 2345
        }
      ]
      const props = {
        ...defaultProps,
        data
      }
      const wrapper = shallow(<MapComponent {...props} />)
      expect(wrapper.find('Marker').length).toBe(1)
    })
  })
})
