import { ThemeProvider } from 'styled-components'
import { HeadSEO } from '../components/HeadSEO'
import { Layout } from '../components/Layout/styles'
import { GlobalStyle } from '../styles/global.styles'
import { theme } from '../styles/theme'

/* eslint-disable @typescript-eslint/no-explicit-any */
type AppProps = {
  Component: React.FC
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HeadSEO
        title={pageProps?.title || 'Ioa Books'}
        backgroundImage={pageProps?.backgroundImage}
        metaDescription={pageProps?.metaDescription}
        metaType={pageProps?.metaType}
      />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
