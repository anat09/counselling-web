import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchContext from 'contexts/search';

export const blogRoutes = [
  {
    link: "/#header",
    name: "About"
  },
  {
    link: "/contact#header",
    name: "Contact"
  },
]

interface LinkProps {
  link: string,
  name: string,
}

interface HorizontalNavbarLinksProps {
  routes: LinkProps[]
}

export const HorizontalNavbarLinks = ({ routes }: HorizontalNavbarLinksProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  

  const CurrentLink = ({ link, name }: LinkProps) => <Link href={ link } className="border-b-2 mx-4 tracking-wide hover:text-primaryLight transition-colors duration-200 transform border-primaryDark">{ name }</Link>
  const OtherLink = ({ link, name }: LinkProps) => <Link href={ link } className="border-b-2 mx-4 tracking-wide border-transparent hover:text-gray-200 transition-colors duration-200 transform hover:border-primaryDark">{ name }</Link>

  return (
    <div className="text-xl">
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

export const BlogNavbar = () => {
  const { setSearchQuery } = React.useContext(SearchContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(
      e.target.value === '' ? null : e.target.value
    );
  }
  return (
    <div className="navbar text-coolwhite bg-primaryLight rounded-xl shadow-lg flex flex-col md:flex-row justify-evenly items-center">
      <div className="text-4xl my-2 md:mx-4">
        AT's Blog
      </div>
      <div className="flex-1 justify-center">
        <HorizontalNavbarLinks routes={blogRoutes} />
      </div>
      <input
        className="input input-bordered my-2 md:input-lg input-white text-primary bg-coolwhite grow"
        placeholder="Search my blog posts!"
        onChange={handleChange}
      />
    </div>
  );
}
