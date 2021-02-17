// Libraries
import Head from 'next/head'
import { useRouter } from 'next/router'
// Types
import MetaTag from '~/types/MetaTag'
// data

type Props = {
  data?: MetaTag
}

const MetaTags: React.FC<Props> = ({ data }: Props) => {
  const router = useRouter()
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={data.siteType} />
        <meta
          name="twitter:card"
          content={data.twitterCard || 'summary_large_image'}
        />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.imageUrl} />
        <meta name="apple-mobile-web-app-title" content={data.title} />
        {data.noIndex && <meta name="robots" content="noindex,nofollow" />}
      </Head>
    </>
  )
}

export default MetaTags
