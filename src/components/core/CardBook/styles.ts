import styled, { css } from 'styled-components'

const ellipsisStyle = css`
  width: 8.4375rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Box = styled.button`
  min-width: 16.9rem;
  flex: 1;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px 0px ${({ theme }) => theme.colors.boxShadowPurple};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 0;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 16px 80px 0px
      ${({ theme }) => theme.colors.boxShadowPurpleDark};
  }

  &:disabled {
    cursor: default;
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
`

export const CoverContainer = styled.div`
  position: relative;
  height: 100%;
  width: 9.2875rem;
  box-shadow: 0px 6px 9px 0px ${({ theme }) => theme.colors.boxShadowBlack};

  img {
    position: relative;
    max-width: 9.2875rem;
    height: 100%;
    object-fit: cover;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 0.75rem;
  text-align: left;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  ${ellipsisStyle};
`

export const Author = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  ${ellipsisStyle};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  span {
    padding: 0;
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    line-height: 1.25rem;
    ${ellipsisStyle};
  }
`
