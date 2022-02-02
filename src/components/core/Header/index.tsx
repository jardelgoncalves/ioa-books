import { useContext } from 'react'
import Router from 'next/router'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { Icon } from '../Icon'

import { AuthContext } from 'contexts/auth-provider'
import * as authService from 'services/auth-service'
import * as S from './styles'

export const Header = () => {
  const { user } = useContext(AuthContext)

  function logout() {
    authService.logout()
    Router.push('/login')
  }

  return (
    <S.Header>
      <Logo themeColor="black" />
      <S.UserWrapper>
        <S.UserMessage className="user-message">
          Bem vindo, <S.UserName>{user?.name ?? 'USUÁRIO'}!</S.UserName>
        </S.UserMessage>
        <Button outline bg="black" size="2xs" onClick={logout}>
          <Icon name="logout" size="md" />
        </Button>
      </S.UserWrapper>
    </S.Header>
  )
}
