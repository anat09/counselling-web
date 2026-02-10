import Head from 'next/head'
import ContactForm from '../contactForm'
import Container from '../container'
import Navbar from '../navbar'
import Footer from './footer';

import styles from './layout.module.css'
import Link from 'next/link'


interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Anamaria Therapy</title>
        <meta
          name="description"
          content="Online counselling and psychotherapy services with Anamaria Tigan (UK)."
        />
      </Head>
      <div className="bg-cover-image bg-cover bg-no-repeat aspect-w-16 aspect-h-9">
        <div className="relative z-10">
          <Navbar/>
        </div>
        <div className="my-4 sm:my-5 md:my-8 lg:my-12 xl:my-14 flex flex-col items-center">
          <div className="mb-12 px-4 py-6 sm:px-10 sm:py-10 bg-primaryDark text-white text-center text-bold text-xl sm:text-3xl md:text-4xl font-lato rounded-md sm:rounded-lg shadow-md">
            Counselling and Psychotherapy <br/> Available for Online Therapy
          </div>
          <Link legacyBehavior href="#contact">
            <a className="px-8 py-4 bg-secondaryDark text-white text-bold text-center text-xl sm:text-2xl md:text-2xl font-lato rounded-md sm:rounded-lg shadow-md">
              Get In Touch
            </a>
          </Link>
        </div>
      </div>
      <Container>
        <main className={styles.main}>{children}</main>
        <div id="contact"><ContactForm /></div>
        <Footer />
      </Container>
    </>
  )
}
