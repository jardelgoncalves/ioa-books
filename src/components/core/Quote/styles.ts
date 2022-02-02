import styled from 'styled-components'

export const Paragraph = styled.p`
  width: 100%;
  max-height: 6rem;
  position: relative;
  padding: 0.5rem 0;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.grey};
  overflow-y: auto;
  text-indent: 1.5rem;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    max-height: unset;
  `}

  svg {
    content: '';
    position: absolute;
    top: 0.625rem;
    left: 0;
  }
`
