import React, { FC, useState } from 'react'
import { Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { TablePagination, TableWrapper } from '@components/Table'
import ActivityTableView from '@pages/Dashboard/components/ActivityTable/ActivityTableView'
import { connect, RootStateOrAny } from 'react-redux'
import { Activity, ActivityState } from '@state/reducers/activityReducers'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */

const ActivityTableContainer: FC<ActivityState> = ({ activity }): JSX.Element => {
  const theme: Theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const slice: number[] = [page * rowsPerPage, (page * rowsPerPage) + rowsPerPage]

  const onPageChange = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0)
    setRowsPerPage(parseInt(event.target.value, 10))
  }

  const columns: any[] = [
    { id: 'id', name: 'ID' },
    { id: 'result', name: 'Result' },
    { id: 'time', name: 'Time' }
  ]

  const rows: Activity[] = activity

  return (
    <TableWrapper theme={theme}>
      <ActivityTableView {...{ columns, rows, slice, theme }} />
      <TablePagination
        count={rows.length}
        rowsPerPageOptions={[10]}
        component='div'
        {...{
          onPageChange,
          onRowsPerPageChange,
          rowsPerPage,
          page
        }}
      />
    </TableWrapper>
  )
}

const mapStateToProps = (state: RootStateOrAny): ActivityState => {
  return {
    activity: state.activity.activity
  }
}

export const ActivityTable = connect(
  mapStateToProps
)(ActivityTableContainer)
