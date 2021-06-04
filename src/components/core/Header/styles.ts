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
  z-index: 9999;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    .user-message {
      display: none;
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
