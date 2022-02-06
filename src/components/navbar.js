import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TitleBox = () => {
  return (
    <div className="absolute flex-col bg-white bg-opacity-100 shadow-lg pl-12 pr-14 pb-7 pt-6 text-center lg:-mb-8 top-0 bottom-0 w-full lg:w-fit">
      <div className="font-philosopher text-3xl tracking-widest leading-none font-bold">Counselling Services</div>
      <div className="font-philosopher text-primary text-sm tracking-wide">{ process.env.NEXT_PUBLIC_PROFESSIONAL_NAME }</div>
    </div>
  )
}

const Menu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const routes = [
    {
      link: "/",
      name: "Home"
    },
    {
      link: "/about",
      name: "About Me"
    },
    {
      link: "/faqs",
      name: "FAQs"
    },
    {
      link: "/fees",
      name: "Fees"
    },
    {
      link: "/contact",
      name: "Contact"
    },
    {
      link: "/emergency",
      name: "Emergency Contact"
    },
  ]

  const CurrentLink = ({ link, name }) => <Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</a></Link>
  const OtherLink = ({ link, name }) => <Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</a></Link>

  return (
    <div className="text-right font-philospher text-lg pt-12 pb-4">
      {
        routes.map((route, idx) => (
          currentRoute === route.link
          ?
          <CurrentLink
            key={idx}
            link={route.link}
            name={route.name}
          />
          :
          <OtherLink
            key={idx}
            link={route.link}
            name={route.name}
          />
        ))
      }
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-primary bg-opacity-25">
      <div className="container site-container justify-between text-gray-600 capitalize dark:text-gray-300 pt-2">
        <TitleBox />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;