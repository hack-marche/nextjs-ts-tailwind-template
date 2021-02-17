import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
// Types
import AlertError from '~/types/AlertError'

type CommonStore = {
  loginModalOpen: boolean
  loginModalDescription: string
  logoutModalOpen: boolean
  menuModalOpen: boolean
  error?: AlertError
}

export const initialState: CommonStore = {
  loginModalOpen: false,
  loginModalDescription: null,
  logoutModalOpen: false,
  menuModalOpen: false,
  error: null,
}

const commonStore = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoginModalOpen: (state, action: PayloadAction<boolean>): void => {
      state.loginModalOpen = action.payload
    },
    setLoginModalDescription: (state, action: PayloadAction<string>): void => {
      state.loginModalDescription = action.payload
    },
    setLogoutModalOpen: (state, action: PayloadAction<boolean>): void => {
      state.logoutModalOpen = action.payload
    },
    setMenuModalOpen: (state, action: PayloadAction<boolean>): void => {
      state.menuModalOpen = action.payload
    },
    setGlobalError: (state, action: PayloadAction<AlertError>): void => {
      const error = action.payload
      state.error = error
    },
  },
})

export default commonStore

export const {
  setLoginModalOpen,
  setLoginModalDescription,
  setLogoutModalOpen,
  setMenuModalOpen,
  setGlobalError,
} = commonStore.actions

export const useCommonStoreState = (): CommonStore => {
  return useSelector(
    (state: { common: ReturnType<typeof commonStore.reducer> }) => state.common
  )
}
