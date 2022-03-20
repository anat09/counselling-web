import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/img/atlogo.jpg'
const ATLogo = () => {
  const ratio = 1.128805621;
  const height = 300;
  return (
    <Image 
      src={logo}
      quality={100}
      width={height * ratio}
      height={height}
      priority='true'
    />
  )
}
export default ATLogo;