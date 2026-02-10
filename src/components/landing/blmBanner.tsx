import React from 'react';
import Image from 'next/image';
import pic from '../../public/assets/img/blmBanner.jpg'
const BlmBanner = () => {
  const ratio = 1.1;
  const height = 100;
  return (
    <div className="flex justify-center overflow-hidden">
      {/* <div className="border-4 w-auto xs:h-auto sm:h-80 border-primary"> */}
        <Image
          src={pic}
          quality={100}
          width={height * ratio}
          height={height}
          priority={true}
          alt="blm-banner"
        />
      {/* </div> */}
    </div>
  )
}
export default BlmBanner;