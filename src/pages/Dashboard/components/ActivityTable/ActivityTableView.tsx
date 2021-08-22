import React, { FC } from 'react'
import Table, {
  TableBody, TableColumn, TableHeader,
  TableScroller, TableRow, TableRowEmpty
} from '@components/Table'
import { ActivityTableRow } from '@pages/Dashboard/components/ActivityTable/ActivityTableRow'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
export interface BalanceTableViewProps {
  rows: any[]
  columns: any[]
  slice: number[]
}

const ActivityTableView: FC<BalanceTableViewProps> = ({ columns, rows, slice }): JSX.Element => {
  return (
    <TableScroller>
      <Table stickyHeader aria-label='Balance table'>
        <TableHeader>
          <TableRow>
            {
              columns.map((column, i) =>
                <TableColumn key={i}>
                  {column.name}
                </TableColumn>
              )
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            (rows.slice(...slice).length > 0)
              ? rows.slice(...slice).map((row, i) => {
                return <ActivityTableRow {...row} key={i} />
              })
              : <TableRowEmpty />
          }
        </TableBody>
      </Table>
    </TableScroller>
  )
}

export default ActivityTableView
