import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: ${({ theme }) => theme.spacing.xl};
`
