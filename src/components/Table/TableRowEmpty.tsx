import { WithTheme, withTheme } from '@material-ui/core'
import React, { FC } from 'react'
import { TableColumn } from '@components/Table'
import { TableRow, TableText } from '@components/Table/index'

export const TableRowEmpty: FC<WithTheme> = ({ theme }): JSX.Element => {
  // @ts-expect-error
  const color = theme.palette.grey[250]

  return (
    <TableRow>
      <TableColumn align='center' colSpan={3}>
        <TableText color={color}>
          No results found
        </TableText>
      </TableColumn>
    </TableRow>
  )
}

export default withTheme(TableRowEmpty)
