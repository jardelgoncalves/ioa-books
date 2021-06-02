import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as S from './styles'

export default function Home() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <img src="/logo.svg" alt="Logo" />
        <span>Books</span>
      </S.LogoWrapper>
      <Input label="Email" />
      <Input label="Senha" type="password">
        <Button label="Entrar" size="xs" />
      </Input>
    </S.Container>
  )
}
