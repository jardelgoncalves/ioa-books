import styled from 'styled-components'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 8.1875rem;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.breakpoints.lessThan('huge')`
    padding: 0 7.1875rem;
  `}

  ${({ theme }) => theme.breakpoints.lessThan('large')`
    padding: 0 4.1875rem;
  `}

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    padding: 0 3.1875rem;
  `}

  ${({ theme }) => theme.breakpoints.lessThan('small')`
    padding: 0 1.5rem;
  `}
`
