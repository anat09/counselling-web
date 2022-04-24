import React from 'react';
import Image from 'next/image';
import room from '../../../public/assets/img/st-anne-exterior.jpg'
const RoomPhoto = () => {
  const ratio = 0.750136836;
  const height = 400;
  return (
    <div className="flex justify-center">
      {/* <div className="border-4 w-auto xs:h-auto sm:h-80 border-primary"> */}
        <Image
          src={room}
          quality={100}
          width={height * ratio}
          height={height}
          priority='true'
        />
      {/* </div> */}
    </div>
  )
}
export default RoomPhoto;