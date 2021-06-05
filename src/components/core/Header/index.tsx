import Router from 'next/router'
import { Logo } from '../Logo'
import { Button } from '../Button'
import * as S from './styles'
import { Icon } from '../Icon'

import * as authService from '../../../services/auth-service'

interface User {
  name: string
}

export interface HeaderProps {
  user: User
}

export const Header = ({ user }: HeaderProps) => {
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
