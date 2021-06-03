import styled from 'styled-components'

interface LogoProps {
  themeColor?: 'white' | 'black'
  mb?: string
}

export const LogoWrapper = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  ${({ mb, theme }) => {
    return mb && `margin-bottom: ${theme.spacing[mb]};`
  }}

  svg {
    height: 36px;
    width: auto;
    fill: ${({ theme, themeColor }) => theme.colors[themeColor || 'white']};
  }

  span {
    color: ${({ theme, themeColor }) => theme.colors[themeColor || 'white']};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.lg};
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`
