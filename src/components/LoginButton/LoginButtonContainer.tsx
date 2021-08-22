import LoginButtonView from '@components/LoginButton/LoginButtonView'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { login, User } from '@state/reducers/userReducers'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const LoginButtonContainer: FC<{ login: (user: User) => void }> = ({ login }): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = () => {
    login({ email, password })
  }

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <LoginButtonView {...{ open, handleChangePassword, handleChangeEmail, handleClose, handleLogin, handleOpen }} />
  )
}

export const LoginButton = connect(
  null,
  { login }
)(LoginButtonContainer)
