import * as S from './styles'

export interface IconProp {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Icon = ({ name, size }: IconProp) => {
  return <S.Icon size={size} src={`/icons/${name}.svg`} alt={`Icone ${name}`} />
}
