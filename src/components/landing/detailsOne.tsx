import React from 'react';
import AtLogo from './atLogo';
import Icons from './icons';
import BACPLogo from './bacpLogo';


export default function detailsOne
() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-evenly items-center">
        <div className="sm:mt-0 mt-10">
          <BACPLogo />
        </div>
        <div className="sm:mt-0 mt-10">
          <Icons />
        </div>
        <div className="sm:mt-0 mt-10">
            <AtLogo /> 
        </div>


      </div>
    </div>
  )
}