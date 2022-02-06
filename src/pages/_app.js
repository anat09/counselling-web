import '../styles/index.css'
import Container from '../components/container'
import Layout from '../components/layout'


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  )
}
