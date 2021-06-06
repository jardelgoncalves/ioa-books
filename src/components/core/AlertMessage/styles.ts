import styled from 'styled-components'
import { rgba } from 'polished'

export interface AlertContainerProps {
  mb?: number
  mt?: number
}

export const AlertContainer = styled.div<AlertContainerProps>`
  ${({ mb }) =>
    mb &&
    `
      margin-bottom: ${mb}px;
    `}
  ${({ mt }) =>
    mt &&
    `
      margin-top: ${mt}px;
    `}
`

export const AlertWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem;
  background-color: ${({ theme }) => rgba(theme.colors.grey, 0.4)};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.xs};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  backdrop-filter: blur(2px);

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 20px;
    background-color: ${({ theme }) => rgba(theme.colors.grey, 0.4)};
    width: 16px;
    height: 8px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`
