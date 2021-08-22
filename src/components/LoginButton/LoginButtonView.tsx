import React, { FC, ReactElement } from 'react'
import RoundButton from '@components/RoundButton'
import { Button, Transitions } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Slide from '@material-ui/core/Slide'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const Transition = React.forwardRef(function Transition (
  props: Transitions & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

interface LoginButtonViewProps {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
  handleLogin: () => void
  handleChangeEmail: (e: any) => void
  handleChangePassword: (e: any) => void
}

const LoginButtonView: FC<LoginButtonViewProps> = ({
  open, handleOpen, handleClose, handleLogin,
  handleChangeEmail, handleChangePassword
}): ReactElement => {
  return (
    <>
      <RoundButton variant='contained' color='primary' onClick={handleOpen}>
        Login
      </RoundButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth='lg'
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='form-dialog-title'>LOGIN</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='email'
            label='Email Address'
            type='email'
            onChange={handleChangeEmail}
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            id='password'
            label='Password'
            type='password'
            onChange={handleChangePassword}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleLogin} variant='contained' color='primary'>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LoginButtonView
