import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-white text-primary flex flex-wrap flex-grow font-lato font-bold text-2xl py-4 justify-around">
      <div className="m-2">
        <Link href='/privacy#header'><a>Privacy</a></Link>
      </div>
      <div className="m-2">
        <Link href='/disclaimer#header'><a>Disclaimer</a></Link>
      </div>
      <div className="m-2">
        <Link href='/romana#header'><a>În Limba Română</a></Link>
      </div>
    </div>
  )
}

export default Footer;