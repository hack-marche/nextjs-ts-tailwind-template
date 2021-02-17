// Libralies
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setMenuModalOpen, setLogoutModalOpen } from '~/store/commonStore'

const LogoutLink: React.FC = () => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(setMenuModalOpen(false))
    dispatch(setLogoutModalOpen(true))
  }
  return (
    <>
      <div onClick={() => onClick()} className="flex items-center">
        <FontAwesomeIcon icon="sign-out-alt" className="mr-2 text-lg" />
        <p>ログアウト</p>
      </div>
    </>
  )
}

export default LogoutLink
