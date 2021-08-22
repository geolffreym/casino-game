import styled from 'styled-components'
import { WithTheme, withTheme } from '@material-ui/core'
import React, { FC, PropsWithChildren } from 'react'

const TableIcon: FC<PropsWithChildren<{ Icon: FC }>> = ({ Icon, children }): JSX.Element => {
  return (
    <TableIconWrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <TableIconText>
        {children}
      </TableIconText>
    </TableIconWrapper>
  )
}

export default TableIcon

const TableIconWrapper = withTheme(
  styled.div<WithTheme>`
    display: flex;

    svg {
      fill: ${({ theme }) => theme.palette.grey[250]};
    }
  `
)

export const TableIconText = withTheme(
  styled.div<WithTheme>`
    color: ${({ theme }) => theme.palette.grey[250]};
    margin-left: 0.5rem;
  `
)

const IconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`
