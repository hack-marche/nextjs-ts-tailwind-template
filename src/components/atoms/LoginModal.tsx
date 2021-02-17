// Libralies
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Modal } from 'react-responsive-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// store
import {
  setAuth,
  clearAuthStore,
  buildAuthUser,
  useAuth,
  setApiCheck,
} from '~/store/authStore'
import {
  setLoginModalOpen,
  useCommonStoreState,
  setGlobalError,
} from '~/store/commonStore'
// lib
import firebase, { fbAuth } from '~/lib/firebase'
import { AuthResult, registerUser, loginUser } from '~/lib/api'
// tyoe
import AuthMode from '~/types/AuthMode'
import AuthUser from '~/types/AuthUser'

const firebaseAuthConfig = (): firebaseui.auth.Config => {
  return {
    signInFlow: 'popup',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
      // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }
}

type ModalModeSettings = {
  title: string
}

const LoginModal: React.FC = () => {
  const dispatch = useDispatch()
  const auth = useAuth()
  const commonStoreState = useCommonStoreState()
  const router = useRouter()
  const [mode, setMode] = useState<AuthMode>('login')
  const [authUser, setAuthUser] = useState<AuthUser>(null)
  const [displayButtons, setDisplayButtons] = useState(false)
  const modeSettings = (mode: AuthMode): ModalModeSettings => {
    if (mode == 'login') {
      return {
        title: 'ログイン',
      }
    }
    if (mode == 'register') {
      return {
        title: '新規アカウント登録',
      }
    }
    return null
  }
  const onClose = () => {
    setDisplayButtons(false)
    setMode('login')
    dispatch(setLoginModalOpen(false))
  }
  const changeMode = (buttonMode: AuthMode) => {
    if (mode === buttonMode) return
    setDisplayButtons(false)
    setMode(buttonMode)
  }
  const changeButtonClass = (buttonMode: AuthMode): string => {
    if (mode == buttonMode) {
      return 'bg-secondary text-white py-2 px-3 '
    } else {
      return 'py-1 px-2 cursor-pointer hover:opacity-75 border-secondary border-2 bg-white text-secondary text-sm'
    }
  }
  // FBログイン
  useEffect(() => {
    const authObserver = fbAuth.onAuthStateChanged(async (fbUser) => {
      if (!auth.uid && fbUser) {
        const user = await buildAuthUser(fbUser)
        setAuthUser(user)
      }
      dispatch(setApiCheck())
    })
    return () => authObserver()
  }, [auth.uid])
  // FBログインを検知してAPI実行
  useEffect(() => {
    if (authUser) {
      const f = async () => {
        let result: AuthResult
        if (mode === 'login') {
          result = await loginUser()
          if (!result) return
          if (result.error) {
            dispatch(setGlobalError(result.error))
            await dispatch(clearAuthStore())
          } else {
            dispatch(setGlobalError(null))
            dispatch(setAuth(authUser))
          }
        }
        if (mode === 'register') {
          result = await registerUser(authUser)
          if (!result) return
          if (result.error) {
            dispatch(setGlobalError(result.error))
            await dispatch(clearAuthStore())
          } else {
            dispatch(setAuth(authUser))
            dispatch(setGlobalError(null))
            router.push('/register_temp_user')
          }
        }
        onClose()
      }
      f()
    }
  }, [authUser])
  return (
    <Modal
      open={commonStoreState.loginModalOpen}
      onClose={() => onClose()}
      center
    >
      <div className="w-full font-bold text-xl mt-6 mb-2 flex justify-center items-center">
        <div>{modeSettings(mode).title}</div>
      </div>
      {commonStoreState.loginModalDescription && (
        <div className="w-full mt-2 mb-2 flex justify-center items-center">
          <div>{commonStoreState.loginModalDescription}</div>
        </div>
      )}
      <div className="w-full block md:flex justify-center mb-4">
        <div
          className={`${changeButtonClass(
            'login'
          )} my-2 md:my-0 mx-2 rounded-lg flex items-center font-bold`}
          onClick={() => changeMode('login')}
        >
          <FontAwesomeIcon icon="sign-in-alt" className="mr-2 text-lg" />
          <p>ログイン{mode != 'login' && ' はこちら'}</p>
        </div>
        <div
          className={`${changeButtonClass(
            'register'
          )} my-2 md:my-0 mx-2 rounded-lg flex items-center font-bold`}
          onClick={() => changeMode('register')}
        >
          <FontAwesomeIcon icon="user" className="mr-2 text-lg" />
          <p>新規アカウント登録{mode != 'register' && ' はこちら'}</p>
        </div>
      </div>
      <div className="flex justify-start items-start">
        <input
          type="checkbox"
          className="form-checkbox h-6 w-6 mr-2"
          onChange={(e) => setDisplayButtons(e.target.checked)}
          checked={displayButtons}
        />
        <p>
          <Link href="/term/service">
            <a target="_blank" className="text-blue-600 font-bold">
              利用規約
            </a>
          </Link>
          と
          <Link href="/term/privacy">
            <a target="_blank" className="text-blue-600 font-bold">
              プライバシーポリシー
            </a>
          </Link>
          に同意する。
        </p>
      </div>
      {displayButtons && (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig()}
          firebaseAuth={fbAuth}
        />
      )}
    </Modal>
  )
}

export default LoginModal
