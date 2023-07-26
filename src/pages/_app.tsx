import '../styles/index.css'
import Container from '../components/container'
import Layout from '../components/layout'
// import 'flowbite'
import { Analytics } from '@vercel/analytics/react'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
        <Analytics />
      </Container>
    </Layout>
  )
}
