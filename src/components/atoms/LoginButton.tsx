// Libralies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
// Components
// store
import { useAuth } from '~/store/authStore'
import { setLoginModalOpen, setMenuModalOpen } from '~/store/commonStore'

const LoginButton = (): React.ReactElement => {
  const auth = useAuth()
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(setLoginModalOpen(true))
    dispatch(setMenuModalOpen(false))
  }
  if (auth.uid) return null
  return (
    <>
      <div
        className="cursor-pointer border-secondary border-2 bg-white text-secondary hover:opacity-75 font-bold my-2 md:my-0 mx-2 py-2 px-3 rounded-lg flex items-center"
        onClick={() => onClick()}
      >
        <FontAwesomeIcon icon="sign-in-alt" className="mr-1 text-lg" />
        <p>ログイン</p>
      </div>
    </>
  )
}

export default LoginButton
