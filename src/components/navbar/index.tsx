// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const TitleBox = () => {
//   return (
//     <div className="absolute flex-col bg-white bg-opacity-100 shadow-lg pl-12 pr-14 pb-7 pt-6 text-center md:-mb-8 top-0 bottom-0 w-full md:w-fit">
//       <div className="font-philosopher text-3xl tracking-widest leading-none font-bold">Counselling Services</div>
//       <div className="font-philosopher text-primary text-sm tracking-wide">{ process.env.NEXT_PUBLIC_PROFESSIONAL_NAME }</div>
//     </div>
//   )
// }

// const Links = ({ isMobile }) => {
//   const router = useRouter();
//   const currentRoute = router.pathname;
//   const routes = [
//     {
//       link: "/",
//       name: "Home"
//     },
//     {
//       link: "/about",
//       name: "About Me"
//     },
//     {
//       link: "/faqs",
//       name: "FAQs"
//     },
//     {
//       link: "/fees",
//       name: "Fees"
//     },
//     {
//       link: "/contact",
//       name: "Contact"
//     },
//     {
//       link: "/emergency",
//       name: "Emergency"
//     },
//   ]

//   const CurrentLink = ({ id, link, name }) => <Link id={ id } href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide text-gray-600 hover:text-gray-800 transition-colors duration-200 transform border-primaryDark">{ name }</a></Link>
//   const OtherLink = ({ id, link, name }) => <Link id={ id } href={ link }><a className="border-b-2 m-2 pb-4 tracking-wide border-transparent text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:border-primaryDark">{ name }</a></Link>
//   return (
//     <>
//       {
//         routes.map((route, idx) => (
//           currentRoute === route.link
//           ?
//           <CurrentLink
//             id={idx}
//             link={route.link}
//             name={route.name}
//           />
//           :
//           <OtherLink
//             id={idx}
//             link={route.link}
//             name={route.name}
//           />
//         ))
//       }
//     </>
//   )
// }

// const Dropdown = () => {
//   const [ open, setOpen ] = useState(false);

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-primary text-sm font-medium text-white hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       <div className="origin-top-right absolute right-0 mt-2 w-22 rounded-md shadow-lg bg-white bg-opacity-50 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//         <div className="py-1" role="none">
//           <Links isMobile={true}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Bar = () => {
//   return (
//     <div className="rounded-lg bg-inherit drawer drawer-end h-14">
//       <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/> 
//       <div className="flex flex-col drawer-content">
//         <div className="w-full navbar bg-inherit">
//           <div className="flex-none lg:hidden">
//             <label for="my-drawer-3" className="btn btn-square btn-ghost">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </label>
//           </div> 
//           <div className="flex-1 px-2 mx-2">
//             <TitleBox />
//           </div> 
//           <div className="flex-none hidden lg:block font-philospher pb-4">
//             <ul className="menu horizontal">
//               <Links/>
//             </ul>
//           </div>
//         </div>
//       </div> 
//       <div className="drawer-side">
//         <label for="my-drawer-3" className="drawer-overlay"></label> 
//         <ul className="p-4 overflow-y-auto menu w-80 bg-inherit">
//           <Links/>
//         </ul>
//       </div>
//     </div>
//   )
// }

// const Navbar = () => {
//   const [ windowSize, setWindowSize ] = useState(1920);
//   useEffect(()=> {
//     setWindowSize(window.innerWidth)
//     window.addEventListener('resize', ()=> {
//       setWindowSize(window.innerWidth)
//     })
//   }, [])
//   console.log(windowSize)
//   return (
//     <nav className="bg-primary bg-opacity-25">
//       <div className="container site-container justify-between text-gray-600 capitalize pt-2">
//         <Bar/>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import HamburgerMenu from './hamburgerMenu';
// import * as css from './navbar.module.css';

const TitleBox = () => {
  return (
    <div className="absolute flex-col bg-white bg-opacity-100 shadow-lg pl-12 pr-14 pb-7 pt-4 sm:pt-6 text-center lg:-mb-8 top-0 bottom-0 w-full lg:w-fit px-4">
      <div className="font-philosopher text-4xl tracking-widest leading-none text-gray-600 font-bold">AT Counselling Services</div>
      <div className="font-philosopher text-primaryDark font-bold text-xl tracking-wide">{ process.env.NEXT_PUBLIC_PROFESSIONAL_NAME }</div>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="bg-primary bg-opacity-25">
      <div className="nav-container nav-width text-gray-600 capitalize">
        <div className="flex lg:justify-between pb-32 sm:pb-22 md:pb-0">
          <div><TitleBox /></div>
          <div><HamburgerMenu /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
