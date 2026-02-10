import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const routes = [
  {
    link: "/#contact",
    name: "Book A Session"
  },
 {
   link: "/#title",
   name: "Home"
 },
]

interface LinkProps {
  link: string,
  name: string,
}

export const HorizontalNavbarLinks = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

//  const CurrentLink = ({ link, name }: LinkProps) => <Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide text-white hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</a></Link>
  // const OtherLink = ({ link, name }: LinkProps) => <Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-red-400 hover:text-red-300 transition-colors duration-200 transform hover:border-primaryDark">{ name }</a></Link>

  return (
    <div className="font-philospher text-2xl pt-12 pb-4">
      {/* {
        routes.map((route, idx) => (
          currentRoute === route.link.split('#')[0] && route.name !== 'Contact'
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
      } */}
      <Link href='/#title'>
        <a
          className={`
            border-b-2 m-2 pb-4 tracking-wide text-white hover:text-gray-800 transition-colors
            duration-200 transform border-primaryDark ${currentRoute === '/' ? '' : 'border-transparent'}
          `}
        >
          Home
        </a>
      </Link>      
      <Link href='/#contact'>
        <a
          className={`
            border-b-2 m-2 pb-4 tracking-wide text-white hover:text-gray-800 transition-colors
            duration-200 transform border-primaryDark ${currentRoute === '/' ? '' : 'border-transparent'}
          `}
        >
          Book A Session
        </a>
      </Link>
    </div>
  )
}

interface VerticalNavbarLinksProps {
  onClick: () => void
}

export const VerticalNavbarLinks = ({ onClick }: VerticalNavbarLinksProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;


  const CurrentLink = ({ link, name }: LinkProps) => <li onClick={onClick}><Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</a></Link></li>
  const OtherLink = ({ link, name }: LinkProps) => <li onClick={onClick}><Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-red-700 hover:text-red-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</a></Link></li>

  // const CurrentLink = ({ link, name }) => <li onClick={() => navigate(link)}><div className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</div></li>
  // const OtherLink = ({ link, name }) => <li onClick={() => navigate(link)}><div className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</div></li>

  return (
    <div className="font-philospher text-lg pt-12 pb-4">
      <li className="border-b-2 m-2 pb-4 tracking-wide">Menu</li>
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