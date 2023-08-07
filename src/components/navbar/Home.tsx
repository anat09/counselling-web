import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { HorizontalNavbarLinks } from './NavbarLinks';
// import * as css from './navbar.module.css';

export const mainRoutes = [
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

const TitleBox = () => {
  return (
    <div className="absolute flex-col bg-white bg-opacity-100 shadow-lg pl-12 pr-14 pb-7 pt-4 sm:pt-6 text-center lg:-mb-8 top-0 bottom-0 w-full lg:w-fit px-4">
      <div className="font-philosopher text-3xl tracking-widest leading-none font-bold">AT Counselling Services</div>
      <div className="font-philosopher text-primary text-base tracking-wide">{ process.env.NEXT_PUBLIC_PROFESSIONAL_NAME }</div>
    </div>
  )
}

export const HomeNavbar = () => {
  return (
    <div className="bg-primary bg-opacity-25">
      <div className="nav-container nav-width text-gray-600 capitalize">
        <div className="flex lg:justify-between pb-32 sm:pb-22 md:pb-0">
          <div><TitleBox /></div>
          <div><HamburgerMenu routes={mainRoutes} /></div>
        </div>
      </div>
    </div>
  );
};
