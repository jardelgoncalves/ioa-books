import styled from 'styled-components'

export const Paragraph = styled.p`
  width: 100%;
  position: relative;
  padding: 0.5rem 0;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.grey};
  text-indent: 1.5rem;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  svg {
    content: '';
    position: absolute;
    top: 0.625rem;
    left: 0;
  }
`
