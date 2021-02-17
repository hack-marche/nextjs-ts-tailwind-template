// Libralies
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Modal } from 'react-responsive-modal'
// Components
import AlertMessage from '~/components/atoms/AlertMessage'
import ComponentSpinner from '~/components/atoms/ComponentSpinner'
// types
import AlertError from '~/types/AlertError'
// Store
import { clearAuthStore } from '~/store/authStore'
// lib
import { deleteUser } from '~/lib/api'

const Withdrawal: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState<AlertError>(null)
  const [loading, setLoading] = useState(false)
  const onClick = async () => {
    setLoading(true)
    const result = await deleteUser()
    if (result.error) {
      setError(result.error)
      setLoading(false)
    } else {
      setError(null)
      await dispatch(clearAuthStore())
      setLoading(false)
      setOpenModal(false)
      router.push('/')
    }
  }
  return (
    <>
      <div className="flex flex-col shadow mb-2 ml-3 p-4">
        <div className="w-full flex justify-center">
          <div
            className="cursor-pointer hover:opacity-75 border-red-700 border-2 bg-white text-red-700 font-bold my-2 md:my-0 mx-2 py-2 px-3 rounded-lg flex items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            <p>退会する</p>
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} center>
        <AlertMessage error={error} />
        <div className="w-full font-bold mt-8 flex flex-wrap justify-center items-center">
          本当に退会しますか？
        </div>
        {loading && <ComponentSpinner />}
        {!loading && (
          <div className="w-full flex justify-center">
            <div
              className="cursor-pointer hover:opacity-75 border-red-700 border-2 bg-white text-red-700 font-bold my-2 md:my-0 mx-2 py-2 px-3 rounded-lg flex items-center justify-center"
              onClick={() => onClick()}
            >
              <p>退会する</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Withdrawal
