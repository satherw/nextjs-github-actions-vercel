import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'

import sliceReducer from './slice'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = persistReducer(persistConfig, combineReducers({
  slice: sliceReducer
}))

export function makeStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        logger
    )
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
export default store