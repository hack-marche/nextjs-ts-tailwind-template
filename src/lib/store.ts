// Libralies
import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from '@reduxjs/toolkit'
import { rootReducer, RootState } from '~/store/rootStore'
import logger from 'redux-logger'
import { MakeStore, createWrapper } from 'next-redux-wrapper'

export const setupStore = (preloadedState?: any): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()]

  // only development
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: true,
    preloadedState,
  })
}

export const makeStore: MakeStore = (initialState) => setupStore(initialState)
export const wrapper = createWrapper<RootState>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})
