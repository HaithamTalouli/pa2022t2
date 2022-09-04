import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Components/Navbar'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import clientConfig from '../convex/_generated/clientConfig'
const convex = new ConvexReactClient(clientConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConvexProvider client={convex}>
      <Navbar />
    </ConvexProvider>
  )
}

export default MyApp
