import * as S from './styles'

export interface AlertMessageProps {
  message?: string
  mb?: number
  mt?: number
}

export const AlertMessage = ({ message, mb, mt }: AlertMessageProps) => {
  return message ? (
    <S.AlertContainer mb={mb} mt={mt}>
      <S.AlertWrapper>{message}</S.AlertWrapper>
    </S.AlertContainer>
  ) : null
}
