import styled, { css } from 'styled-components'

const fontCommons = css`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
`

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.sizes.desktop.navbar};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.sm};

  &.--scroll {
    margin-top: 0;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 8.1875rem;
    backdrop-filter: blur(7px);
  }

  ${({ theme }) => theme.breakpoints.lessThan('huge')`
    &.--scroll {
      padding: 0 7.1875rem;
    }
  `}

  ${({ theme }) => theme.breakpoints.lessThan('large')`
    &.--scroll {
      padding: 0 4.1875rem;
    }
  `}

    ${({ theme }) => theme.breakpoints.lessThan('medium')`
      .user-message {
        display: none;
      }
      &.--scroll {
        padding: 0 3.1875rem;
      }
    `}

    ${({ theme }) => theme.breakpoints.lessThan('small')`
      &.--scroll {
        padding: 0 1.5rem;
      }
    `}
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const UserMessage = styled.span`
  ${fontCommons}
`

export const UserName = styled.span`
  ${fontCommons}
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  margin-right: ${({ theme }) => theme.spacing.md};
`
