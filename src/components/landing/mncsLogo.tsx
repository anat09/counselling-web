import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/img/mncs-accred-logo.jpg'
const MNCSLogo = () => {
  const ratio = 3.950236967;
  const height = 150;
  return (
    <Image 
      alt="MNCS Accredited Logo"
      src={logo}
      quality={100}
      width={height * ratio}
      height={height}
      priority={true}
    />
  )
}
export default MNCSLogo;