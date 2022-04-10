import React from 'react';

import Icons from './icons';
import AtLogo from './atLogo';
import BacpLogo from './bacpLogo';

export default function Details() {
  return (
    <div className="flex sm:flex-row flex-col justify-evenly items-center">
      <div>
        <AtLogo /> 
      </div>
      <div>
        <Icons />
      </div>
      <div className="sm:mt-0 mt-10">
        <BacpLogo />
      </div>
    </div>
  )
}