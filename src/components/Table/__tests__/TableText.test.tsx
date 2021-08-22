import TableText from '@components/Table/TableText'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import React from 'react'

describe('<TableText />', () => {
  it('should render table text', () => {
    const component = shallow(<TableText color='#999999'>$ 10 USD</TableText>)
    expect(component).toMatchSnapshot()
  })

  it('should have table amount children text', () => {
    const component = shallow(<TableText color='#999999'>$ 10 USD</TableText>)

    expect(component.text()).toEqual('$ 10 USD')
  })

  it('should have table text valid color styles', () => {
    const component = shallow(<TableText color='#999999' />)
    expect(component).toHaveStyleRule('color', '#999999')
  })
})
