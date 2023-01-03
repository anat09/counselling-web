import ContactForm from '../contactForm'
import Container from '../container'
import Navbar from '../navbar'
import Image from 'next/image'
import Footer from './footer';

import cover from '../../public/assets/img/cover.jpg'
import styles from './layout.module.css'

const CoverImage = () => {
  return (
    <Image 
      src={cover}
      quality={100}
      // layout="fill"
      priority='true'
    />
  )
}

export default function Layout({ children }) {
  return (
    <>     
      <div className={ styles.navbar }>
        <Navbar/>
      </div>
      <div className={ styles.image }>
        <CoverImage />
      </div>
      <div id="header" className="max-w-2xl px-4 py-6 sm:px-10 sm:py-10 mx-auto bg-primary text-white text-center text-xl sm:text-3xl md:text-4xl font-lato sm:rounded-lg shadow-md lg:-translate-y-48 md:-translate-y-24">
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
