import React from 'react'

import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/index.css'

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
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  )
}
