import styled, { keyframes } from 'styled-components'

const Colorize = keyframes`
  0% {
    fill: #333333;
    transform: scale(1.3);
  }
  33% {
    fill: #B22E6F;
  }
  50% {
    fill: #54105f;
    transform: scale(1.7);
  }
  80% {
    fill: #AB2680;
  }
  100% {
    transform: scale(1.3);
  }

`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #333333;
    animation: ${Colorize} 2s infinite linear;
    height: auto;
    width: 8rem;
  }
`
