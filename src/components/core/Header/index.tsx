import { Logo } from '../Logo'
import { Button } from '../Button'
import * as S from './styles'
import { Icon } from '../Icon'
import { useEffect, useState } from 'react'

interface User {
  name: string
}

export interface HeaderProps {
  user: User
}

export const Header = ({ user }: HeaderProps) => {
  const [headerClass, setHeaderClass] = useState('')
  const onScroll = () => {
    const currentYPos = window.scrollY
    const limitYPos = 40
    const isScrollingUp = currentYPos > limitYPos
    if (isScrollingUp) {
      setHeaderClass('--scroll')
      return
    }
    setHeaderClass('')
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false)
    return () => {
      window.removeEventListener('scroll', onScroll, false)
    }
  }, [])
  return (
    <S.Header className={headerClass}>
      <Logo themeColor="black" />
      <S.UserWrapper>
        <S.UserMessage className="user-message">
          Bem vindo, <S.UserName>{user?.name ?? 'USUÁRIO'}!</S.UserName>
        </S.UserMessage>
        <Button outline bg="black" size="2xs">
          <Icon name="logout" size="md" />
        </Button>
      </S.UserWrapper>
    </S.Header>
  )
}
