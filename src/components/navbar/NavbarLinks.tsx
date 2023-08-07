import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface LinkProps {
  link: string,
  name: string,
}

interface HorizontalNavbarLinksProps {
  routes: LinkProps[]
}

export const HorizontalNavbarLinks = ({ routes }: HorizontalNavbarLinksProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  

  const CurrentLink = ({ link, name }: LinkProps) => <Link href={ link } className="border-b-2 m-2 pb-4 tracking-wide hover:text-primaryDark transition-colors duration-200 transform border-primaryDark">{ name }</Link>
  const OtherLink = ({ link, name }: LinkProps) => <Link href={ link } className="border-b-2 m-2 pb-4 tracking-wide border-transparent hover:text-primaryDark transition-colors duration-200 transform hover:border-primaryDark">{ name }</Link>

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
  routes: LinkProps[],
  onClick: () => void
}

export const VerticalNavbarLinks = ({ routes, onClick }: VerticalNavbarLinksProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;


  const CurrentLink = ({ link, name }: LinkProps) => <li onClick={onClick}><Link href={ link } className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</Link></li>
  const OtherLink = ({ link, name }: LinkProps) => <li onClick={onClick}><Link href={ link } className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</Link></li>

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