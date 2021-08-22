import React, { FC } from 'react'
import { Provider } from 'react-redux'
import createStore from '@state/store'
import { createHashHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, Switch } from 'react-router'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { globalOverrides, defaultTheme, typography } from '@styles/theme'
import Dashboard from '@pages/Dashboard'

const history = createHashHistory()
const store = createStore(history)

const theme = responsiveFontSizes(createTheme(
  Object.assign({}, globalOverrides, defaultTheme, typography)
))

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
