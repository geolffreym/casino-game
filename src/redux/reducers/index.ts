import { connectRouter } from 'connected-react-router'
import { Reducer, combineReducers } from 'redux'
import { History } from 'history'
import BalanceReducers from '@state/reducers/balanceReducers'
import ActivityReducers from '@state/reducers/activityReducers'
import UserReducers from '@state/reducers/userReducers'

const createRootReducer = (history: History): Reducer => {
  return combineReducers({
    balance: BalanceReducers,
    activity: ActivityReducers,
    user: UserReducers,
    router: connectRouter(history)
  })
}
export default createRootReducer
