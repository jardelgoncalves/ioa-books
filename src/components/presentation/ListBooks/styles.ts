import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    margin-right: 1rem;
  }
  button + button {
    margin-left: 1rem;
  }
  margin-bottom: 2rem;
`
export const PaginationText = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  strong {
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`
