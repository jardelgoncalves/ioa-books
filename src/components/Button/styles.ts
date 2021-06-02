import styled from 'styled-components'

export interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  width?: number
}
export const ButotnWrapper = styled.button<ButtonProps>`
  height: ${({ theme, size }) => theme.shapes.buttonSizes[size || 'md']};
  width: ${({ width }) => `${width || 85}px`};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ width }) => `${width || 85}px`};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  display: flex;
  align-items: center;
  justify-content: center;
`
