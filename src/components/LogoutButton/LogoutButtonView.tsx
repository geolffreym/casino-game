import React, { FC, ReactElement } from 'react'
import RoundButton from '@components/RoundButton'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const LogoutButtonView: FC<{ handleLogout: () => void }> = ({ handleLogout }): ReactElement => {
  return (
    <RoundButton variant='contained' color='primary' onClick={handleLogout}>
      Logout
    </RoundButton>
  )
}

export default LogoutButtonView
