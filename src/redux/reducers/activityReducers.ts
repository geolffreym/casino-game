import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Activity {
  id: string
  result: number[]
  time: string
}

export interface ActivityState {
  activity: Activity[]
}

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

const local = window.localStorage.getItem('activity')
const parsedLocal = local && JSON.parse(local)
const initialState: ActivityState = local ? parsedLocal : { activity: [] }
const activityReducers = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivity: (state: ActivityState, action: PayloadAction<Activity[]>) => {
      state.activity = action.payload
      window.localStorage.setItem('activity', JSON.stringify({ activity: action.payload }))
    },
    clearActivity: (state: ActivityState) => {
      state.activity = []
      window.localStorage.removeItem('activity')
    }
  }
})

const { actions, reducer } = activityReducers
export const { setActivity, clearActivity } = actions
export default reducer
