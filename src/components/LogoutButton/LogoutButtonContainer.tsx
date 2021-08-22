import LogoutButtonView from '@components/LogoutButton/LogoutButtonView'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { logout } from '@state/reducers/userReducers'
import { clearActivity } from '@state/reducers/activityReducers'
import { clearBalance } from '@state/reducers/balanceReducers'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
interface LogoutButtonProps {
  logout: () => void
  clearActivity: () => void
  clearBalance: () => void
}

const LogoutButtonContainer: FC<LogoutButtonProps> = ({ logout, clearActivity, clearBalance }): JSX.Element => {
  const handleLogout = () => {
    logout()
    clearActivity()
    clearBalance()
  }

  return (
    <LogoutButtonView handleLogout={handleLogout} />
  )
}

export const LogoutButton = connect(
  null,
  { logout, clearActivity, clearBalance }
)(LogoutButtonContainer)
