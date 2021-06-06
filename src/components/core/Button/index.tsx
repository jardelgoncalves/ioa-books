import { Loading } from '../Loading'
import * as S from './styles'

export interface ButtonProps {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  outline?: boolean
  bg?: 'primary' | 'black' | 'grey' | 'white'
  width?: number
  label?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode
}

export const Button = ({
  size,
  width,
  label,
  onClick,
  type,
  outline,
  bg,
  disabled,
  loading,
  children,
}: ButtonProps) => {
  return (
    <S.ButotnWrapper
      size={size}
      outline={outline}
      bg={bg}
      width={width}
      onClick={onClick}
      disabled={disabled || loading}
      type={type || 'button'}
    >
      {loading && <Loading />}
      {!loading && label}
      {!loading && children}
    </S.ButotnWrapper>
  )
}
