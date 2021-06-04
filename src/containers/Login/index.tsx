import { Button } from '../../components/core/Button'
import { Input } from '../../components/core/Input'
import { Logo } from '../../components/core/Logo'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <Logo themeColor="white" mb="lg" />
      <Input label="Email" />
      <Input label="Senha" type="password">
        <Button label="Entrar" size="xs" />
      </Input>
    </S.Container>
  )
}
