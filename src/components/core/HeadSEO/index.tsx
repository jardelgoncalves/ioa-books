import Head from 'next/head'

interface HeadSEOProps {
  title?: string
  metaDescription?: string
  metaType?: string
}

export const HeadSEO = ({ title, metaDescription, metaType }: HeadSEOProps) => (
  <Head>
    {title && (
      <>
        <title>{title}</title>
        <meta itemProp="name" content={title} />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </>
    )}
    {metaDescription && (
      <>
        <meta name="description" content={metaDescription} />
        <meta itemProp="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
      </>
    )}
    <meta name="twitter:card" content="summary_large_image" />
    {metaType && <meta property="og:type" content={metaType} />}
  </Head>
)
