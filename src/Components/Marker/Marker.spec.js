import React from 'react'
import { shallow } from 'enzyme'

import Marker from './Marker'

describe(Marker.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const props = {
    lat: 0,
    lng: 0,
    index: 0,
    handleClick: () => {}
  }

  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<Marker {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('@props', () => {
    it('should fire handleClick prop when clicked', () => {
      const onClickMock = jest.fn()
      const wrapper = shallow(<Marker {...props} handleClick={onClickMock} />)
      wrapper.simulate('click')
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
