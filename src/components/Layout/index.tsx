import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  backgroundImage: string
}

export const Layout = ({ children, backgroundImage }: LayoutProps) => (
  <S.Layout backgroundImage={backgroundImage}>{children}</S.Layout>
)
