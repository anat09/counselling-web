import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/img/logo.png'
const Logo = () => {
  return (
    <Image 
      src={logo}
      quality={100}
      width={337}
      height={150}
      priority='true'
    />
  )
}
export default Logo;