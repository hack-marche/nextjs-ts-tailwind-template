// Libralies
import { NextPage } from 'next'
// Components
import Heading1 from '~/components/atoms/Heading1'
import MetaTags from '~/components/molecules/MetaTags'
import DefaultLayoutWrapper from '~/components/organisms/DefaultLayoutWrapper'
// Types
// lib
// data
import { buildMetaTagData } from '~/data/metaDefault'

const Page: NextPage = () => {
  const metaData = buildMetaTagData()
  return (
    <>
      <MetaTags data={metaData} />
      <DefaultLayoutWrapper>
        <Heading1 title="ホーム" />
      </DefaultLayoutWrapper>
    </>
  )
}

export default Page
