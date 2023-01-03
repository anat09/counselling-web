import '../styles/index.css'
import Container from '../components/container'
import Layout from '../components/layout'
// import 'flowbite'
import { Analytics } from '@vercel/analytics/react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
        <Analytics />
      </Container>
    </Layout>
  )
}
