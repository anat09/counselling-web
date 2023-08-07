import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '../contactForm'
import Container from '../container'
import { HomeNavbar } from '../navbar'

import cover from '../../public/assets/img/cover.jpg'
import styles from './layout.module.css'

const CoverImage = () => {
  return (
    <Image 
      src={cover}
      quality={100}
      // layout="fill"
      priority={true}
      alt="Cover Image"
    />
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export function HomeLayout({ children }: LayoutProps) {
  return (
    <div data-them="mytheme">
      <Head>
        <title>AT Counselling Services</title>
        <meta
          name="description"
          content="Online and in-person counselling and psychotherapy services with Anamaria Tigan in Greater Manchester and Cheshire."
        />
      </Head>
      <div className={ styles.navbar }>
        <HomeNavbar/>
      </div>
      <div className={ styles.image }>
        <CoverImage />
      </div>
      <div id="header" className="max-w-2xl px-4 py-6 sm:px-10 sm:py-10 mx-auto bg-primary text-white text-center text-xl sm:text-3xl md:text-4xl font-lato sm:rounded-lg shadow-md lg:-translate-y-48 md:-translate-y-24">
        Counselling and Psychotherapy for Individuals and Couples <br/> Delivered Online and In-Person
      </div>
      <Container>
        <main className={styles.main}>{children}</main>
        <hr className="translate-y-8 md:-translate-y-6"/>
        <ContactForm />
      </Container>
      <Footer />
    </div>
  )
}

const Footer = () => {
  return (
    <div className="text-white flex flex-wrap font-lato font-bold text-2xl py-4 justify-around bg-primaryLight bg-opacity-80">
      <div className="m-2">
        <Link href='/privacy#header'>Privacy</Link>
      </div>
      <div className="m-2">
        <Link href='/disclaimer#header'>Disclaimer</Link>
      </div>
      <div className="m-2">
        <Link href='/romana#header'>În Limba Română</Link>
      </div>
    </div>
  )
}

export default Footer;