import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/img/mncps-logo.png'
const MNCPSLogo = () => {
  const ratio = 3.233471074;
  const height = 160;
  return (
    <Image 
      src={logo}
      quality={100}
      width={height * ratio}
      height={height}
      priority={true}
    />
  )
}
export default MNCPSLogo;