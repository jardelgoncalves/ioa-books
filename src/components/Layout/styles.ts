import styled from 'styled-components'

type LayoutProps = {
  backgroundImage?: string
}

export const Layout = styled.main<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 8.1875rem;
  height: 100%;
  width: 100%;

  ${({ backgroundImage }) => {
    return (
      backgroundImage &&
      `
        background-image: url('/${backgroundImage}');
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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
