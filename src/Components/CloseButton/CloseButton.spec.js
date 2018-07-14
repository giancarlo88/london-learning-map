import React from 'react'
import { shallow } from 'enzyme'

import CloseButton from './CloseButton'

describe(CloseButton.name, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const defaultProps = {
    handleClick: () => {}
  }

  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<CloseButton {...defaultProps} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('@props', () => {
    describe('when clicked', () => {
      it('should fire the handleClick prop', () => {
        const handleClickMock = jest.fn()
        const props = { 
          ...defaultProps, 
          handleClick: handleClickMock
        }
        const wrapper = shallow(<CloseButton {...props}/>)
        wrapper.simulate('click')
        expect(handleClickMock).toHaveBeenCalledTimes(1)
      })
    })
  })
})
