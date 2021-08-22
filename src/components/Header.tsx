import React, { FC } from 'react'
import styled from 'styled-components'
import RoundButton from '@components/RoundButton'
import Logo from '@assets/images/logo.png'
import { connect, RootStateOrAny } from 'react-redux'
import LoginButton from '@components/LoginButton/index'
import LogoutButton from '@components/LogoutButton/index'
import Avatar from '@material-ui/core/Avatar'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
interface HeaderProps {
  balance: number
  isLogged: boolean
}

const Header: FC<HeaderProps> = ({ balance, isLogged }): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogoWrapper>
          <HeaderLogo src={Logo} />
        </HeaderLogoWrapper>
        <HeaderBalance color='primary'>
          $ {balance}
        </HeaderBalance>
      </HeaderContent>
      <HeaderContent>
        {
          isLogged
            ? <>
              <HeaderAvatar src='https://material-ui.com/static/images/avatar/2.jpg' />
              <LogoutButton />
            </>
            : <LoginButton />
        }
      </HeaderContent>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state: RootStateOrAny): HeaderProps => {
  return {
    balance: state.balance.balance,
    isLogged: state.user.isLogged
  }
}

export default connect(
  mapStateToProps
)(Header)

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem 12rem;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
`

export const HeaderLogoWrapper = styled.div`
  height: 2.5rem;
  width: auto;
  margin-right: 2rem;
`

export const HeaderLogo = styled.img`
  height: 100%;
  width: auto;
`

export const HeaderBalance = styled(RoundButton)`
  pointer-events: none;
  background-color: white !important;

  span {
    transform: translateY(2px);
  }
`

export const HeaderAvatar = styled(Avatar)`
  border: 1px solid #fff;
  margin-right: 1.5rem;
`
