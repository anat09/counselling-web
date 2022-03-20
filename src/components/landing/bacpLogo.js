import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/img/logo.png'
const BACPLogo = () => {
  const ratio = 2.249728556;
  const height = 150;
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
export default BACPLogo;