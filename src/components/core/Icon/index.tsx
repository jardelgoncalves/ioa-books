import ArrowLeft from 'assets/icons/arrow-left.svg'
import ArrowRight from 'assets/icons/arrow-right.svg'
import Close from 'assets/icons/close.svg'
import Logout from 'assets/icons/logout.svg'
import * as S from './styles'

export interface IconProp {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const icons = {
  'arrow-left': <ArrowLeft />,
  'arrow-right': <ArrowRight />,
  close: <Close />,
  logout: <Logout />,
}

export const Icon = ({ name, size }: IconProp) => {
  return <S.Icon size={size}>{icons[name]}</S.Icon>
}
