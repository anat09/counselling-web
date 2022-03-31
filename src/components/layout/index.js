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
      <Navbar/>
      <CoverImage />
      <Container>
        <main className={styles.main}>{children}</main>
        <hr className="translate-y-8 md:-translate-y-6"/>
        <ContactForm />
        <Footer />
      </Container>
      
    </>
  )
}
