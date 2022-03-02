import React from 'react';

import Section from './section';

const Availability = () => {
  return (
    <>
      <div className="font-lato text-primary text-2xl py-6 font-bold">Availability</div>
      <Section paras={[
        `Online Video/Telephone Counselling Sessions can be booked between 10am - 8pm on
        Thursday, Fridays, and Saturdays.`,
        `Face-to-Face Counselling Sessions can be booked between 1PM - 5PM on Fridays.`
      ]} />
    </>
  )
}

export default Availability