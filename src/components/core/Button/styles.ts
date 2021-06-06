import styled from 'styled-components'
import { rgba } from 'polished'

export interface ButtonProps {
  outline?: boolean
  bg?: 'primary' | 'black' | 'grey' | 'white'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  width?: number
}
export const ButotnWrapper = styled.button<ButtonProps>`
  ${({ outline, theme, size, bg, width }) => {
    if (outline) {
      return `
        height: ${theme.shapes.buttonSizes[size || 'md']};
        width: ${theme.shapes.buttonSizes[size || 'md']};
        background-color: transparent;
        border-radius: ${theme.shapes.buttonSizes[size || 'md']};
        border: 1px solid ${rgba(theme.colors[bg || 'white'], 0.2)};
      `
    }
    return `
      height: ${theme.shapes.buttonSizes[size || 'md']};
      width: ${width || 85}px;
      border: none;
      border-radius: ${width || 85}px;
      background-color: ${theme.colors[bg || 'white']};
    `
  }}
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`
