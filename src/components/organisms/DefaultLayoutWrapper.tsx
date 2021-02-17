// Libralies
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// Components
import ComponentSpinner from '~/components/atoms/ComponentSpinner'
import AlertMessage from '~/components/atoms/AlertMessage'
import LoginModal from '~/components/atoms/LoginModal'
import LogoutModal from '~/components/atoms/LogoutModal'
import Header from '~/components/molecules/Header'
import BreadCrumbs from '~/components/molecules/BreadCrumbs'
import Footer from '~/components/molecules/Footer'
// store
import { setGlobalError, useCommonStoreState } from '~/store/commonStore'
// Types
import BreadCrumbsData from '~/types/BreadCrumbsData'

type Props = {
  children: React.ReactNode
  isLoading?: boolean
  breadCrumbsData?: BreadCrumbsData
}

const DefaultLayoutWrapper: React.FC<Props> = (props: Props) => {
  const [pageLoad, setPageLoad] = useState(false)
  const dispatch = useDispatch()
  const commonStoreState = useCommonStoreState()
  // 初期表示時にエラーを消す
  useEffect(() => {
    if (!pageLoad && commonStoreState.error) {
      dispatch(setGlobalError(null))
    }
    setPageLoad(true)
  }, [commonStoreState.error])
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-wrap py-6">
        {/* Post Section */}
        <section className="w-full md:w-2/3 flex flex-col md:px-3">
          <div className="hidden md:block">
            <BreadCrumbs {...props.breadCrumbsData} />
          </div>
          <AlertMessage error={commonStoreState.error} />
          {props.isLoading ? <ComponentSpinner /> : props.children}
          <div className="mt-4 mx-3 block md:hidden">
            <BreadCrumbs {...props.breadCrumbsData} />
          </div>
        </section>
        {/* Sidebar Section */}
      </main>
      <LoginModal />
      <LogoutModal />
      <Footer />
    </>
  )
}

export default DefaultLayoutWrapper
