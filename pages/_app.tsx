import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store, { persistor } from "../src/store"
import React from "react"
import { PersistGate } from 'redux-persist/integration/react'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
      </Provider>
  )
}