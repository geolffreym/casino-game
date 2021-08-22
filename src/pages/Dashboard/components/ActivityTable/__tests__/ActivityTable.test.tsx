import ActivityTable from '@pages/Dashboard/components/ActivityTable/index'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { createMemoryHistory } from 'history'
import createStore from '@state/store'
import { Provider } from 'react-redux'

/* eslint-disable no-undef */
describe('<ActivityTable />', () => {
  it('should render', () => {
    const history = createMemoryHistory()
    const store = createStore(history)
    const component = shallow(
      <Provider store={store}>
        <ActivityTable />;
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
