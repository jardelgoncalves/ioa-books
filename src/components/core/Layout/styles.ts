import styled from 'styled-components'

type Props = {
  backgroundImage?: string
  isFullPage?: boolean
}

export const Layout = styled.main<Props>`
  width: 100%;
  height: ${({ isFullPage }) => (isFullPage ? '100vh' : 'auto')};
`

export const Content = styled.div<Props>`
  padding: 0 8.1875rem;
  height: 100%;
  width: 100%;
  overflow: auto;

  ${({ backgroundImage }) => {
    return (
      backgroundImage &&
      `
        background-image: url('/${backgroundImage}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        background-attachment: fixed;
      `
    )
  }}

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
