import React, { FC } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Box from '@components/Box'
import DashboardBalanceTable from '@pages/Dashboard/components/ActivityTable'
import Game from '@pages/Dashboard/components/Game'
import styled from 'styled-components'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
export const DashboardView: FC = (): JSX.Element => {
  return (
    <DashboardWrapper>
      <Header />

      <DashboardContent>
        <Game />
        <Box title='Recent Activity'>
          <DashboardBalanceTable />
        </Box>
      </DashboardContent>

      <Footer />
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: #181f24;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
  width='106' height='106' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' 
  gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' 
  stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' 
  stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse'
   x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' 
   stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' 
   stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23141a1f' 
   fill-opacity='0.66'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect 
   y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.66'%3E%3Cpolygon 
   fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' 
   points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
`

const DashboardContent = styled.div`
  padding: 0 12rem 4rem;
`

/* eslint-enable  @typescript-eslint/explicit-function-return-type */
