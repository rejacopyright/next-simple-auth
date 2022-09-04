import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { store, persistor } from '@redux'
import { PersistGate } from 'redux-persist/integration/react'
import '@styles/app.scss'

import LayoutProvider from '@components/layouts/LayoutProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default MyApp
