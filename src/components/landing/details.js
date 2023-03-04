import React from 'react';

import Icons from './icons';
import AtLogo from './atLogo';
import BACPLogo from './bacpLogo';
import MNCSLogo from './mncsLogo';

export default function Details() {
  return (
    <div className="flex sm:flex-row flex-col justify-evenly items-center">
      <div className="sm:mt-0 mt-6">
        <MNCSLogo />
      </div>
      <div>
        <AtLogo /> 
      </div>
      <div>
        <Icons />
      </div>
      <div className="sm:mt-0 mt-10">
        <BACPLogo />
      </div>
    </div>
  )
}