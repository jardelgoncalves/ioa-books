import * as S from './styles'

export interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  width?: number
  label: string
  onClick?: () => void
}

export const Button = ({ size, width, label, onClick, type }: ButtonProps) => {
  return (
    <S.ButotnWrapper
      size={size}
      width={width}
      onClick={onClick}
      type={type || 'button'}
    >
      {label}
    </S.ButotnWrapper>
  )
}
