import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  backgroundImage: string
  isFullPage?: boolean
}

export const Layout = ({
  children,
  backgroundImage,
  isFullPage,
}: LayoutProps) => (
  <S.Layout isFullPage={isFullPage}>
    <S.Content backgroundImage={backgroundImage}>{children}</S.Content>
  </S.Layout>
)
