import React from 'react'
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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, name, type, placeholder, children, value, onchange, ...args },
    ref,
  ) => {
    return (
      <S.Container>
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.Input
            ref={ref}
            name={name}
            placeholder={placeholder}
            value={value}
            type={type || 'text'}
            onChange={onchange}
            {...args}
          />
        </S.InputWrapper>
        {children}
      </S.Container>
    )
  },
)

Input.displayName = 'Input'

export { Input }
