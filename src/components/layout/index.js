import Head from 'next/head'
import ContactForm from '../contactForm'
import Container from '../container'
import Navbar from '../navbar'
import Image from 'next/image'
import Footer from './footer';

import cover from '../../public/assets/img/cover.jpg'
import styles from './layout.module.css'

const CoverImage = () => {
  return (
    <div  className={ styles.image }>
      <Image 
        src={cover}
        quality={100}
        layout="fill"
        priority='true'
      />
    </div>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AT Counselling Services</title>
        <meta
          name="description"
          content="Online and in-person counselling and psychotherapy services with Anamaria Tigan in Greater Manchester and Cheshire."
        />
      </Head>
      <div className="z-10">
        <Navbar/>
      </div>
      <div className="-z-10">
        <CoverImage />
      </div>
      <div id="header" className="max-w-2xl px-4 py-6 sm:px-10 sm:py-10 mx-auto bg-primary text-white text-center text-xl sm:text-3xl md:text-4xl font-lato sm:rounded-lg shadow-md  lg:-translate-y-44 md:-translate-y-20">
        Counselling and Psychotherapy from Greater Manchester and Cheshire
      </div>
      <Container>
        <main className={styles.main}>{children}</main>
        <hr className="translate-y-8 md:-translate-y-6"/>
        <ContactForm />
        <Footer />
      </Container>
      
    </>
  )
}
