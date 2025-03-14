import React from 'react';
import Image from 'next/image';
import pic from '../../public/assets/img/profilePic.jpg'
const ProfilePic = () => {
  const ratio = 1.045614035;
  const height = 500;
  return (
    <div className="flex justify-center rounded-xl overflow-hidden">
      {/* <div className="border-4 w-auto xs:h-auto sm:h-80 border-primary"> */}
        <Image
          src={pic}
          quality={100}
          width={height * ratio}
          height={height}
          priority={true}
        />
      {/* </div> */}
    </div>
  )
}
export default ProfilePic;