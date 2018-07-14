import React from 'react'
import { shallow } from 'enzyme'

import Marker from './Marker'

describe(Marker.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const defaultProps = {
    lat: 0,
    lng: 0,
    index: 0,
    handleClick: () => {}
  }

  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<Marker {...defaultProps} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('@props', () => {
    it('should fire handleClick prop when clicked', () => {
      const handleClickMock = jest.fn()
      const props = { 
        ...defaultProps, 
        handleClick: handleClickMock
      }
      const wrapper = shallow(<Marker {...props}/>)
      wrapper.simulate('click')
      expect(handleClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
