// Libralies
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-responsive-modal'
// Store
import { clearAuthStore } from '~/store/authStore'
import {
  setMenuModalOpen,
  setLogoutModalOpen,
  setGlobalError,
  useCommonStoreState,
} from '~/store/commonStore'

const LogoutModal: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const commonState = useCommonStoreState()
  const submitLogout = async (): Promise<void> => {
    await dispatch(clearAuthStore())
    dispatch(setMenuModalOpen(false))
    dispatch(setGlobalError(null))
    dispatch(setLogoutModalOpen(false))
    router.push('/')
  }
  return (
    <Modal
      open={commonState.logoutModalOpen}
      onClose={() => dispatch(setLogoutModalOpen(false))}
      center
    >
      <div className="w-full font-bold mt-8 flex flex-wrap justify-center items-center">
        ログアウトしますか？
      </div>
      <div className="w-full flex justify-center mt-4">
        <div
          className="cursor-pointer hover:opacity-75 border-red-700 border-2 bg-white text-red-700 font-bold my-2 md:my-0 mx-2 py-2 px-3 rounded-lg flex items-center justify-center"
          onClick={() => submitLogout()}
        >
          <p>ログアウトする</p>
        </div>
      </div>
    </Modal>
  )
}

export default LogoutModal
