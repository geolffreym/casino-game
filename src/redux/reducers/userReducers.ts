import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  email?: string
  password?: string
}

export interface UserState {
  user: User
  isLogged: boolean
}

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

const local = window.localStorage.getItem('user')
const parsedLocal = local && JSON.parse(local)
const initialState: UserState = local ? parsedLocal : { user: {}, isLogged: false }
const userReducers = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLogged = true
      const user = { user: action.payload, isLogged: true }
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    logout: (state: UserState) => {
      state.user = {}
      state.isLogged = false
      window.localStorage.removeItem('user')
    }
  }
})

const { actions, reducer } = userReducers
export const { login, logout } = actions
export default reducer
