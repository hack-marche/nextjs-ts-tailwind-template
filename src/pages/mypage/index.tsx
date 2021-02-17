// Libralies
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Components
import Heading1 from '~/components/atoms/Heading1'
import Withdrawal from '~/components/atoms/Withdrawal'
import MetaTags from '~/components/molecules/MetaTags'
import DefaultLayoutWrapper from '~/components/organisms/DefaultLayoutWrapper'
import AuthModule from '~/components/organisms/AuthModule'
// Types
import BreadCrumb from '~/types/BreadCrumb'
import BreadCrumbsData from '~/types/BreadCrumbsData'
// lib
// store
import { useAuth } from '~/store/authStore'
// data
import { buildNoIndexMetaTagData } from '~/data/metaDefault'

const Page: NextPage = () => {
  const auth = useAuth()
  const h1text = 'マイページ'
  const router = useRouter()

  // アカウント有効化されていない場合は専用ページに飛ぶ
  useEffect(() => {
    if (auth.uid && !auth.confirm) {
      router.push('/register_temp_user')
    }
  }, [auth.uid])

  const breadCrumbs: Array<BreadCrumb> = []
  const breadCrumbsData: BreadCrumbsData = {
    currentTitle: h1text,
    breadCrumbs,
  }
  return (
    <>
      <MetaTags
        data={buildNoIndexMetaTagData(`${h1text}- ${auth.displayName}さん`)}
      />
      <DefaultLayoutWrapper breadCrumbsData={breadCrumbsData}>
        {!auth.uid && <AuthModule />}
        {auth.uid && (
          <>
            <Heading1 title={h1text} />
            {/* アカウント情報 */}
            <div className="m-3 mt-4 flex w-full items-center text-lg font-bold">
              <FontAwesomeIcon icon="user" className="mr-2 text-gray-800" />
              <h3 className="text-gray-800">アカウント情報</h3>
            </div>
            <div className="flex flex-col shadow mb-2 ml-3 p-4">
              <h4 className="w-full font-bold text-gray-800">ユーザー名</h4>
              <p className="w-full mt-2">{auth.displayName}さん</p>
            </div>
            {/* 退会案内 */}
            <div className="m-3 mt-4 flex w-full items-center text-lg font-bold">
              <FontAwesomeIcon
                icon="exclamation-triangle"
                className="mr-2 text-red-700"
              />
              <h3 className="text-gray-800">退会のご案内</h3>
            </div>
            <Withdrawal />
          </>
        )}
      </DefaultLayoutWrapper>
    </>
  )
}

export default Page
