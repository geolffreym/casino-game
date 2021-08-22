import styled from 'styled-components'

const TableText = styled.span<{ color: string }>`
  font-weight: bold;
  color: ${({ color }) => color};
`

export default TableText
