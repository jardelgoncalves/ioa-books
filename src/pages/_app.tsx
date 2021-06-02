import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global.styles'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from '../styles/theme'

type AppProps = {
  Component: React.FC
  props: any
}

export default function App({ Component, props }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ioa Books</title>
      </Head>
      <GlobalStyle />
      <Component {...props} />
    </ThemeProvider>
  )
}
