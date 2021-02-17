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
  return (
    <>
      <MetaTags data={buildMetaTagData()} />
      <DefaultLayoutWrapper>
        <Heading1 title="404エラー" />
        <article className="flex flex-col justify-center my-5 py-5 shadow">
          <p className="w-hull text-center text-xl text-gray-600 font-bold mb-2">
            ページがみつかりません。
          </p>
          <p className="w-hull text-center text-gray-600 font-bold mb-4">
            URLが正しくありません。
          </p>
        </article>
      </DefaultLayoutWrapper>
    </>
  )
}

export default Page
