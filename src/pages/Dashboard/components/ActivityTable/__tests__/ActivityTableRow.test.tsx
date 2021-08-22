import { shallow } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { ActivityTableRow } from '@pages/Dashboard/components/ActivityTable/ActivityTableRow'

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
describe('<ActivityTableRow />', () => {
  it('should render', () => {
    const component = shallow(<ActivityTableRow id='1213' result={[0, 0, 0]} time='07/05/21' />)
    expect(component).toMatchSnapshot()
  })
})
