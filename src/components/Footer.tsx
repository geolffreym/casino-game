import React, { FC } from 'react'
import styled from 'styled-components'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const Footer: FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      © Geolffrey Mena, 2021.
    </FooterWrapper>
  )
}

export default Footer

export const FooterWrapper = styled.footer`
  width: 100%;
  margin: 3rem 0;
  text-align: center;
  color: white;
`
