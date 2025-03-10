import React from 'react';
import BACPLogo from './bacpLogo';
import LgbtFlag from './lgbtFlag'
import BlmBanner from './blmBanner'


export default function detailsOne
() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-evenly items-center">
      <div className="sm:mt-0 mt-6">
          <BlmBanner />
        </div>
        <div className="sm:mt-0 mt-10">
          <BACPLogo />
        </div>
        <div className="sm:mt-0 mt-10">
          <LgbtFlag />
        </div>  
      </div>
    </div>
  )
}