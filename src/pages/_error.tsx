// Libralies
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <Heading1 title="システムエラー" />
        <article className="flex flex-col justify-center my-5 py-5 shadow">
          <p className="w-hull text-center text-xl text-gray-600 font-bold mb-2">
            予期せぬエラーが発生しました。
          </p>
          <div className="w-hull text-center">
            <FontAwesomeIcon
              icon={['far', 'frown']}
              className="text-gray-600 text-6xl"
            />
          </div>
        </article>
      </DefaultLayoutWrapper>
    </>
  )
}

export default Page
