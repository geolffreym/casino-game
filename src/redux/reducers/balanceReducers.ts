import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BalanceState {
  balance: number
}

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

const defaultBalance = 20
const local = window.localStorage.getItem('balance')
const parsedLocal = local && JSON.parse(local)
const initialState: BalanceState = local ? parsedLocal : { balance: defaultBalance }
const balanceReducers = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state: BalanceState, action: PayloadAction<number>) => {
      state.balance = action.payload
      window.localStorage.setItem('balance', JSON.stringify({ balance: action.payload }))
    },
    clearBalance: (state: BalanceState) => {
      state.balance = defaultBalance
      window.localStorage.removeItem('balance')
    }
  }
})

const { actions, reducer } = balanceReducers
export const { setBalance, clearBalance } = actions
export default reducer
