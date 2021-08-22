import Header, { HeaderLogo, HeaderWrapper } from '@components/Header'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '@src/redux/store'
import { createMemoryHistory } from 'history'

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
describe('<Header />', () => {
  it('should render header', () => {
    const history = createMemoryHistory()
    const store = createStore(history)
    const component = shallow(
      <Provider store={store}>
        <Header />;
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })

  it('should have header wrapper valid styles', () => {
    const component = shallow(<HeaderWrapper />)

    expect(component).toHaveStyleRule('display', 'flex')
    expect(component).toHaveStyleRule('justify-content', 'space-between')
  })

  it('should have header icon valid styles', () => {
    const component = shallow(<HeaderLogo />)

    expect(component).toHaveStyleRule('width', 'auto')
    expect(component).toHaveStyleRule('height', '100%')
  })
})
