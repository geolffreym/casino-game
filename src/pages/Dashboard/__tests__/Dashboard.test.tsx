import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '@pages/Dashboard'

/* eslint-disable no-undef */
describe('<Dashboard />', () => {
  it('should render', () => {
    const dashboardComponent = shallow(<Dashboard />)
    expect(dashboardComponent).toMatchSnapshot()
  })
})
