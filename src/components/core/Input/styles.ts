import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 23rem;
  width: 100%;
  height: 3.75rem;
  background-color: ${({ theme }) => theme.colors.bgInput};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.xs};
  margin-bottom: 1rem;
`

export const InputWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 8px 2px 0;
  user-select: none;
`

export const Label = styled.span`
  align-self: stretch;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`

export const Input = styled.input`
  height: 100%;
  width: 100%;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
  }
`
