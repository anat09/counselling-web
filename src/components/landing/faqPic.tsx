import React from 'react';
import Image from 'next/image';
import pic from '../../public/assets/img/faqPic.jpg'
const FAQPic = () => {
  const ratio = 1.128805621;
  const height = 200;
  return (
    <div className="flex justify-center rounded-xl overflow-hidden">
      {/* <div className="border-4 w-auto xs:h-auto sm:h-80 border-primary"> */}
        <Image
          src={pic}
          quality={100}
          width={height * ratio}
          height={height}
          priority={true}
          alt="faq-pic"
        />
      {/* </div> */}
    </div>
  )
}
export default FAQPic;