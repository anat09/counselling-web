import React from 'react';

import Section from './section';
import SubHeader from './subHeader';

const Availability = () => {
  return (
    <>
      <SubHeader title={'Availability'} />
      <Section paras={[
        `Online Video/Telephone Counselling Sessions can be booked between 10am - 8pm on
        Thursday, Fridays, and Saturdays.`,
        `Face-to-Face Counselling Sessions can be booked between 1PM - 5PM on Fridays.`
      ]} />
    </>
  )
}

export default Availability