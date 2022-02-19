import React, { useState } from 'react';
import { HorizontalNavbarLinks, VerticalNavbarLinks } from './navbarLinks'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState('');

    const clickHandler = () => {
        setIsOpen(!isOpen);
    };

    const fullPage = isOpen ? 'fixed h-screen w-full z-20' : hide;

    return (
      <>
      <div className="hidden w-full bg-inherit lg:block">
        <HorizontalNavbarLinks/>
      </div>
      <label for="my-drawer-3" className="lg:hidden btn btn-square z-20 fixed btn-ghost" onClick={clickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 z-20 fixed stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
      <div className={`rounded-lg drawer drawer-end fixed h-screen w-full z-10 ${fullPage} `} >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={clickHandler} />
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay" onClick={clickHandler}></label> 
          <ul className="p-4 overflow-y-auto menu w-full bg-base-100 flex-col">
            <VerticalNavbarLinks onClick={clickHandler}/>
          </ul>
        </div>
        </div>
      </>
    );
};

export default HamburgerMenu;