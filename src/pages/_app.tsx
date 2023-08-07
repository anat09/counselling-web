import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '../styles/index.css'
import Container from '../components/container'
import { HomeLayout } from '../components/layout'
// import 'flowbite'
import { Analytics } from '@vercel/analytics/react'


// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Container>
//         <Component {...pageProps} />
//         <Analytics />
//       </Container>
//     </Layout>
//   )
// }

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <HomeLayout>{page}</HomeLayout>)
  return getLayout(<Component {...pageProps} />)
}