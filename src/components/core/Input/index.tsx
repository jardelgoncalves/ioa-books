import * as S from './styles'

export interface InputProps {
  children?: React.ReactNode
  label: string
  name?: string
  type?: string
  placeholder?: string
  value?: string
  onchange?: () => void
}

export const Input = ({
  label,
  name,
  type,
  placeholder,
  children,
  value,
  onchange,
}: InputProps) => {
  return (
    <S.Container>
      <S.InputWrapper>
        <S.Label>{label}</S.Label>
        <S.Input
          placeholder={placeholder}
          value={value}
          name={name}
          type={type || 'text'}
          onChange={onchange}
        />
      </S.InputWrapper>
      {children}
    </S.Container>
  )
}
