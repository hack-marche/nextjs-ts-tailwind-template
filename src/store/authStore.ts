import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import firebase, { fbAuth } from '~/lib/firebase'
import { AppThunk } from '~/store/rootStore'
// Types
import AuthUser from '~/types/AuthUser'

const getFbConfirm = async (firebaseUser: firebase.User): Promise<boolean> => {
  const idTokenResult = await firebaseUser.getIdTokenResult(true)
  if (!idTokenResult) return false
  return idTokenResult.claims.confirm == true
}

export const buildAuthUser = async (
  firebaseUser: firebase.User
): Promise<AuthUser> => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null
  }
  const providerDataArray = get(firebaseUser, 'providerData')
  const providerData = providerDataArray ? providerDataArray[0] : undefined

  const authUser: AuthUser = {
    uid: get(firebaseUser, 'uid'),
    email: get(firebaseUser, 'email') || get(providerData, 'email'),
    displayName: get(firebaseUser, 'displayName'),
    confirm: await getFbConfirm(firebaseUser),
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('===firebaseUser=====================')
    console.log(firebaseUser)
    console.log('====================================')
    const idToken = await firebaseUser.getIdToken()
    authUser.idToken = idToken
  }
  return authUser
}

export const initialState: AuthUser = {
  uid: undefined,
  email: undefined,
  displayName: undefined,
  idToken: undefined,
  apiCheck: false,
  confirm: false,
}

const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthUser>): void => {
      const authUser = action.payload
      state.uid = authUser.uid
      state.email = authUser.email
      state.displayName = authUser.displayName
      state.idToken = authUser.idToken
      state.confirm = authUser.confirm
    },
    setConfirm: (state, action: PayloadAction<boolean>): void => {
      state.confirm = action.payload
    },
    setApiCheck: (state): void => {
      state.apiCheck = true
    },
    clearAuth: (state): void => {
      state.uid = undefined
      state.email = undefined
      state.displayName = undefined
      state.idToken = undefined
      state.confirm = false
    },
  },
})

export default authStore

export const { setAuth, setConfirm, clearAuth, setApiCheck } = authStore.actions

export const useAuth = (): AuthUser => {
  return useSelector(
    (state: { auth: ReturnType<typeof authStore.reducer> }) => state.auth
  )
}

export const setAuthStore = (): AppThunk => async (dispatch): Promise<void> => {
  const fbUser = await fbAuth.currentUser
  if (fbUser) {
    const authUser = await buildAuthUser(fbUser)
    dispatch(setAuth(authUser))
  }
}

export const setAuthConfirm = (): AppThunk => async (
  dispatch
): Promise<void> => {
  const fbUser = await fbAuth.currentUser
  if (fbUser) {
    const confirm = await getFbConfirm(fbUser)
    dispatch(setConfirm(confirm))
  }
}

export const clearAuthStore = (): AppThunk => async (
  dispatch
): Promise<void> => {
  await fbAuth.signOut()
  dispatch(clearAuth())
}
