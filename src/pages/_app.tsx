import React from 'react'

import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/index.css'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../horizon-ui/theme/theme'

import Container from '../components/container'
import Layout from '../components/layout'
// import 'flowbite'



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AT Counselling Services</title>
        <meta
          name="description"
          content="Online and in-person counselling and psychotherapy services with Anamaria Tigan in Greater Manchester and Cheshire."
        />
      </Head>
      {
        pageProps.isAdminPage ? (
            <ChakraProvider theme={theme}>
              <React.StrictMode>
                <Component {...pageProps} />
              </React.StrictMode>
            </ChakraProvider>
          ): (
          <Layout>
            <Container>
              <Component {...pageProps} />
            </Container>
          </Layout>
        )
      }
    </>
  )
}
