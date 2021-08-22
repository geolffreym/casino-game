import { mount } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import ActivityTableView from '@pages/Dashboard/components/ActivityTable/ActivityTableView'

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
describe('<ActivityTableView/> ', () => {
  it('should render valid columns', () => {
    const rows = [
      {
        id: '1213',
        result: [0, 0, 0],
        time: '07/05/21'
      }
    ]
    const component = mount(<ActivityTableView rows={rows} columns={[]} slice={[0, 2]} />)

    expect(component).toMatchSnapshot()
  })
})
