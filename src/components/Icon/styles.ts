import styled from 'styled-components'

type IconProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Icon = styled.img<IconProps>`
  width: ${({ theme, size }) => theme.shapes.iconSizes[size || 'md']};
  height: ${({ theme, size }) => theme.shapes.iconSizes[size || 'md']};
`
