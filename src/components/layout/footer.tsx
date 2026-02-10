import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="absolute flex-col flex-wrap text-primary font-lato font-bold text-xl py-4 ">
       <div className="m-2">
        <Link legacyBehavior href="/privacy#title"><a>Privacy</a></Link>
      </div>
      <div className="m-2">
        <Link legacyBehavior href="/disclaimer#title"><a>Disclaimer</a></Link>
      </div>
      <div className="m-2">
        <Link legacyBehavior href="/romana#title"><a>În Limba Română</a></Link>
      </div>
      {/* Copyright Statement */}
      <div className="w-full text-center text-lg mt-4">
        © {currentYear} Anamaria Therapy. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;


// bg-primary bg-opacity-25 - if using this then remove the value of "absolute" from the parent div, and add "flex".