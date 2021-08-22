import LoginButton from '@components/LoginButton/index'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { createMemoryHistory } from 'history'
import createStore from '@state/store'
import { Provider } from 'react-redux'

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
describe('<LoginButton />', () => {
  it('should render', () => {
    const history = createMemoryHistory()
    const store = createStore(history)
    const component = shallow(
      <Provider store={store}>
        <LoginButton />;
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
