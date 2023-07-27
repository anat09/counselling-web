import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const routes = [
  {
    link: "/#header",
    name: "Home"
  },
  {
    link: "/blog#header",
    name: "Blog"
  },
  {
    link: "/experience#header",
    name: "Experience"
  },
  {
    link: "/faqs#header",
    name: "FAQs"
  },
  {
    link: "/fees#header",
    name: "Fees"
  },
  {
    link: "/contact#header",
    name: "Contact"
  },
  {
    link: "/emergency#header",
    name: "Emergency"
  },
]

interface LinkProps {
  link: string,
  name: string,
}

export const HorizontalNavbarLinks = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  

  const CurrentLink = ({ link, name }: LinkProps) => <Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</a></Link>
  const OtherLink = ({ link, name }: LinkProps) => <Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</a></Link>

  return (
    <div className="font-philospher text-lg pt-12 pb-4">
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

interface VerticalNavbarLinksProps {
  onClick: () => void
}

export const VerticalNavbarLinks = ({ onClick }: VerticalNavbarLinksProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;


  const CurrentLink = ({ link, name }: LinkProps) => <li onClick={onClick}><Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</a></Link></li>
  const OtherLink = ({ link, name }: LinkProps) => <li onClick={onClick}><Link href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</a></Link></li>

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