import React, { FC } from 'react'
import { TableColumn, TableRow, TableText } from '@components/Table'
import { WithTheme, withTheme } from '@material-ui/core'
import Diamond from '@assets/images/diamond.svg'
import Heart from '@assets/images/heart.svg'
import Spades from '@assets/images/spades.svg'
import Clover from '@assets/images/clover.svg'
import styled from 'styled-components'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
export interface BalanceTableRowsProps {
  id: string
  result: number[]
  time: string
}

const ActivityTableRowContainer: FC<BalanceTableRowsProps & WithTheme> = ({ id, result, time, theme }): JSX.Element => {
  // @ts-expect-error
  const color = theme.palette.grey[250]
  const getIcon = (icon: number) => {
    switch (icon) {
      case 1: return <Spades />
      case 2: return <Clover />
      case 3: return <Diamond />
      case 4: return <Heart />
      default: return <span>?</span>
    }
  }

  return (
    <TableRow>
      <TableColumn>
        <TableText color={color}>
          {id}
        </TableText>
      </TableColumn>
      <TableColumn>
        <ResultWrapper>
          {getIcon(result[0])}
          {getIcon(result[1])}
          {getIcon(result[2])}
        </ResultWrapper>
      </TableColumn>
      <TableColumn>
        {time}
      </TableColumn>
    </TableRow>
  )
}

const ResultWrapper = withTheme(
  styled.div<WithTheme>`
      display: flex;
      
      svg {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        fill: ${({ theme }) => theme.palette.grey[250]}
      }
    `
)

export const ActivityTableRow = withTheme(ActivityTableRowContainer)
