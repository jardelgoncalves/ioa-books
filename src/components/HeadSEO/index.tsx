import Head from 'next/head'

interface HeadSEOProps {
  title?: string
  backgroundImage?: string
  metaDescription?: string
  metaType?: string
}

export const HeadSEO = ({
  title,
  backgroundImage,
  metaDescription,
  metaType,
}: HeadSEOProps) => (
  <Head>
    {backgroundImage && (
      <style jsx global>{`
        body {
          background-image: url('/${backgroundImage}');
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `}</style>
    )}

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
