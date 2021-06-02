import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global.styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
