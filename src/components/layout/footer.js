import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-white text-primary flex font-lato font-bold text-2xl py-4 justify-center">
      <Link href='/privacy#header'><a>Privacy</a></Link>
      <div className="px-6" />
      <Link href='/disclaimer#header'><a>Disclaimer</a></Link>
      <div className="px-6" />
      <Link href='/romana#header'><a>În Limba Română</a></Link>
    </div>
  )
}

export default Footer;