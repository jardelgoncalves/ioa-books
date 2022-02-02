import { rgba } from 'polished'
import styled from 'styled-components'

type LayerProps = {
  isOpen?: boolean
}

export const Layer = styled.div<LayerProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.6)};
  backdrop-filter: blur(2px);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    flex-direction: column;
    padding: 60px 8px 8px;
  `}
`

export const ModalWrapper = styled.div`
  max-width: 48.6875rem;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 80px 0px ${({ theme }) => theme.colors.boxShadowBlack};
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    flex-direction: column;
    overflow-y: auto;
  `}
`

export const ImagePreview = styled.div`
  max-width: 18.875rem;
  width: 100%;
  height: 100%;
  user-select: none;

  img {
    width: 100%;
    height: 29rem;
    object-fit: cover;
  }
`

export const Content = styled.div`
  flex: 1;

  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    padding-left: 0;
  `}
`

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  color: ${({ theme }) => theme.colors.black};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`
export const Author = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
`

export const ContentInfo = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`

export const Subtitle = styled.h5`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`

export const ContentInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  span {
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.black};

    &:last-child {
      font-weight: ${({ theme }) => theme.typography.weight.regular};
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`
export const CloseButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 16px;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 16px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`
