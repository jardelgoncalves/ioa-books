import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/core/Button'
import { Input } from '../../components/core/Input'
import { Logo } from '../../components/core/Logo'
import * as S from './styles'
import { AuthContext } from '../../contexts/auth-provider'
import { AlertMessage } from '../../components/core/AlertMessage'

export default function Login() {
  const { signIn, error, loading } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()

  async function handleSignIn({ email, password }) {
    await signIn({ email, password })
  }
  return (
    <S.Container>
      <Logo themeColor="white" mb="lg" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input {...register('email')} label="Email" />
        <Input {...register('password')} label="Senha" type="password">
          <Button loading={loading} label="Entrar" size="xs" type="submit" />
        </Input>
      </form>
      <AlertMessage message={error} mt={16} />
    </S.Container>
  )
}
