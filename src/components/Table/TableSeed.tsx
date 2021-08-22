import styled from 'styled-components'
import {
  Paper, TableBody as TableBodyMui,
  TableContainer, TableCell, TableHead, withTheme
} from '@material-ui/core'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
export const TableWrapper = withTheme(
  styled(Paper)`
    box-shadow: none;
    padding: 0 1rem;

    svg, p, div {
      color: ${({ theme }) => theme.palette.grey[250]};
    }
  `
)

export const TableScroller = withTheme(
  styled(TableContainer)`
    border: 1px solid ${({ theme }) => theme.palette.grey[200]};
    border-radius: 1rem;
  `
)

export const TableHeader = withTheme(
  styled(TableHead)`
    position: relative;

    th {
      background-color: ${({ theme }) => theme.palette.grey[150]};
      text-transform: uppercase;
      padding: 16px 14px 10px 14px;
      line-height: 1;
    }
  `
)

export const TableColumn = withTheme(
  styled(TableCell)`
    white-space: nowrap;
    color: ${({ theme }) => theme.palette.grey[250]};
    font-size: 1rem;
    font-weight: bold;
    padding: 14px;
  `
)

export const TableBody = styled(TableBodyMui)`
  position: relative;

  tr:last-of-type > td {
    border-bottom: none;
  }
`
