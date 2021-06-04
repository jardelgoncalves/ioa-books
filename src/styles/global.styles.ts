import { createGlobalStyle } from 'styled-components'

import { theme as Theme } from './theme'

type ThemeGlobal = Omit<typeof Theme, 'colors'>
interface ThemeStyled extends ThemeGlobal {
  colors: {
    [key: string]: string
  }
}

interface GlobalStyleProps {
  theme: ThemeStyled
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 97.5%;
    }
  }

  body {
    transition: background 0.4s;
    transition: background-color 0.4s;
    background-color:${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
    color: inherit
  }

  body,
  input,
  textarea,
  button {
    font: 500 1rem ${({ theme }) => theme.typography.family.primary};
    color: ${({ theme }) => theme.colors.black};
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-family: ${({ theme }) => theme.typography.family.primary};
    color: ${({ theme }) => theme.colors.black};
  }
  button {
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar {
    width: 0.25rem;
    border-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  }
`
