import styled from 'styled-components'

type IconProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Icon = styled.span<IconProps>`
  margin: 0;
  padding: 0;
  svg {
    width: ${({ theme, size }) => theme.shapes.iconSizes[size || 'md']};
    height: ${({ theme, size }) => theme.shapes.iconSizes[size || 'md']};
  }
`
