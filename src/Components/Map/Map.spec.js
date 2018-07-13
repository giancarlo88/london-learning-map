import React from 'react'
import { shallow } from 'enzyme'

import MapComponent from './Map'

describe(MapComponent.name, () => {
  const data = [
    {
      _id: 1,
      index: 1,
      'x-cord': 1234,
      'y-cord': 2345,
      info: 'foo', 
      title: 'bar'
    }
  ]
  const defaultProps = {
    data,
    handleClick: () => {}
  }
  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<MapComponent {...defaultProps} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a <Marker /> for each entry in the data prop', () => {
    
      const props = {
        ...defaultProps,
        data
      }
      const wrapper = shallow(<MapComponent {...props} />)
      expect(wrapper.find('Marker').length).toBe(1)
    })
  })

  describe('@props', () => {
    describe('when a marker is selected', () => {
      it('renders a <DescriptionBox/>', () => {
        const props = { 
          ...defaultProps, 
          selectedMarker: 1
        }
        const wrapper = shallow(<MapComponent {...props} />)
        expect(wrapper.find('DescriptionBox')).toHaveLength(1)
      });
    });
  });
})
