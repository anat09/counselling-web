import React from 'react';

import Icons from './icons';
import AtLogo from './atLogo';
import BACPLogo from './bacpLogo';
import MNCPSLogo from './mncpsLogo';

export default function Details() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-evenly items-center">
        <div className="sm:mt-0 mt-10">
            <AtLogo /> 
        </div>
        <div className="sm:mt-0 mt-10">
          <Icons />
        </div>
        <div className="sm:mt-0 mt-10">
          <BACPLogo />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-evenly items-center">
        <div className="sm:mt-0 mt-6">
          <MNCPSLogo />
        </div>
      </div>
    </div>
  )
}