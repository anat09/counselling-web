import React, { useState } from 'react';
import { HorizontalNavbarLinks, VerticalNavbarLinks } from './navbarLinks'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState('hidden');

    const clickHandler = () => {
      setIsOpen(!isOpen);
    };

    const fullPage = isOpen ? 'fixed h-screen w-full z-20' : hide;
  
    return (
      <>
        <div className="hidden w-fit bg-inherit lg:block">
          <HorizontalNavbarLinks />
        </div>
        <label htmlFor="my-drawer-3" className="lg:hidden btn btn-lg z-20 fixed btn-ghost bg-transparent text-secondary" onClick={clickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="inline-block w-8 h-8 z-20 m-1 fixed stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-8 h-8 z-20 fixed stroke-current" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg> */}
        </label>
        <div className={`drawer drawer-end lg:hidden fixed h-screen w-screen ${fullPage}`} >
          <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={clickHandler} />
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay" onClick={clickHandler}></label> 
            <ul className="p-4 overflow-y-auto menu w-full flex-col bg-white bg-opacity-75">
              <VerticalNavbarLinks onClick={clickHandler} />
            </ul>
          </div>
        <div className="drawer-side"> <label htmlFor="my-drawer-3" className="drawer-overlay" onClick={clickHandler}></label>
            <ul className="p-4 overflow-y-auto menu w-full flex-col bg-transparent">
              <VerticalNavbarLinks onClick={clickHandler} />
                {/* Close button */}
              <li className="mt-4"><button onClick={clickHandler} className="text-white font-bold text-lg py-2 px-4 "> 
                Close Menu</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
};

export default HamburgerMenu;