import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  max-width: 23rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  img {
    width: 6.525rem;
    height: auto;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.lg};
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`
