import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../app/store'
import NavBar from "@/components/NavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="p-4">
        <NavBar />
        <div className="mt-14 relative h-full">
      <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}
