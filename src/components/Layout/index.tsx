import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  backgroundImage: string
}

export const Layout = ({ children, backgroundImage }: LayoutProps) => (
  <S.Layout>
    <S.Content backgroundImage={backgroundImage}>{children}</S.Content>
  </S.Layout>
)
