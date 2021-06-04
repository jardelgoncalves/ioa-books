import { ThemeProvider } from 'styled-components'
import { HeadSEO } from '../components/core/HeadSEO'
import { Layout } from '../components/core/Layout'
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
        metaDescription={pageProps?.metaDescription}
        metaType={pageProps?.metaType}
      />
      <GlobalStyle />
      <Layout backgroundImage={pageProps?.backgroundImage}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
