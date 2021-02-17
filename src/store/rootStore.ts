// Libralies
import { combineReducers, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
// stores
import commonStore, {
  initialState as commonInitiallState,
} from '~/store/commonStore'
import authStore, { initialState as authInitiallState } from '~/store/authStore'

export const rootReducer = combineReducers({
  common: commonStore.reducer,
  auth: authStore.reducer,
})

const rootPreloadedState = {
  common: commonInitiallState,
  auth: authInitiallState,
}

export type RootState = typeof rootPreloadedState
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
