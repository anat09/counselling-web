import Head from 'next/head'
import ContactForm from '../contactForm'
import Container from '../container'
import Navbar from '../navbar'
import Image from 'next/image'
import Footer from './footer';

import cover from '../../public/assets/img/cover.jpg'
import styles from './layout.module.css'
import Link from 'next/link'

const CoverImage = () => {
  return (
    <Image 
      src={cover}
      quality={100}
      // layout="fill"
      priority={true}
    />
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>AT Counselling Services</title>
        <meta
          name="description"
          content="Online and in-person counselling and psychotherapy services with Anamaria Tigan in Greater Manchester and Cheshire."
        />
      </Head>
      <div className="bg-cover-image bg-no-repeat bg-cover bg-center h-screen flex flex-col">
        <div className="relative z-10">
          <Navbar/>
        </div>
        <div className="my-36 sm:my-40 md:my-72 lg:my-60 xl:my-54 flex flex-col items-center">
          <div className="mb-12 px-4 py-6 sm:px-10 sm:py-10 bg-primary text-white text-center text-xl sm:text-3xl md:text-4xl font-lato rounded-md sm:rounded-lg shadow-md">
            Counselling and Psychotherapy <br/> Available for Online Therapy
          </div>
          <Link href="#contact">
            <a className="px-8 py-4 bg-secondary text-white text-center text-xl sm:text-3xl md:text-4xl font-lato rounded-md sm:rounded-lg shadow-md">
              Book Now
            </a>
          </Link>
        </div>
      </div>
      <br id="title"></br>
      <br/>
      <Container>
        <main className={styles.main}>{children}</main>
        <div id="contact"><ContactForm /></div>
        <Footer />
      </Container>
    </>
  )
}
