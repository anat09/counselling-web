import React from 'react';

import Section from './section';
import SubHeader from './subHeader';

import { eighth } from './faqs/content';

const Availability = () => {
  return (
    <>
      <SubHeader title={'Availability'} />
      <Section paras={eighth} />
    </>
  )
}

export default Availability