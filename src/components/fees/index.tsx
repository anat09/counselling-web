import React from 'react';

import Accordion from '../accordion';
import Address from '../address';
import Carousel from './photos/Carousel';
import HyperRef from '../hyperRef';
import Section from '../section'

import Availability from '../availability';
import Warning from '../warning';

const Precautions = () => {
  const TickIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  const precautions = [
    'Hand-sanitizer available in the therapy room;',
    `There will be a distance of approximately two metres between yourself and your counsellor at all times;`,
    `Your counsellor will open and close doors during your appointment, so you do not have
    to touch any other surfaces than your sitting area;`,
  ]
  return (
    <>
      <div className="flex flex-col pl-2">
        { 
          precautions.map((precaution, idx) => {
            return (
              <div key={idx} className="flex flex-row items-center">
                <div className="text-primary"><TickIcon /></div>
                <div className="font-lato p-2.5 text-lg italic">{ precaution }</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default function Fees() {
  const items = [
    {
      header: "Face-to-Face Individual Counselling",
      content: <Section paras={[
        'I offer 50 minute Face-to-Face counselling sessions in Cholrton & Didsbury, Manchester. Each session costs £50.',
      ]}/>
    },
    {
      header: "Video - Online Individual Counselling",
      content: <Section paras={[
        `I offer 50 minute online counselling sessions. Each session costs £50.`
      ]} />
    },
    {
      header: "Face-to-Face Couples Counselling",
      content: <Section paras={[
        'I offer 50 minute Face-to-Face couples counselling sessions in Cholrton & Didsbury, Manchester. Each session costs £70.',
      ]}/>
    },
    {
      header: "Video - Online Couples Counselling",
      content: <Section paras={[
        `I offer 50 minute online couples counselling sessions. Each session costs £70.`
      ]} />
    },
    {
      header: "Telephone Individual Counselling",
      content: <Section paras={[
        `I offer 50 minutes telephone counselling sessions. Each session costs £50. Please note: I do not offer telephone counselling to couples.`
      ]} />
    },
    {
      header: "Concessions and Reduced Rates",
      content: <Section paras={[
        `I have limited spaces for discounted counselling fees for clients who may be on a low income,
        unemployed, students or counsellors in training. Please contact me to discuss your situation, if needed.`
      ]} />
    },
  ]
  return (
    <>
      <Section paras={[
        `Please see below counselling fees.`,
      ]} />
      <Accordion items={items} />
      {/* <Section paras={[
        `I work privately from various places in Greater Manchester and Cheshire.`,
        `Please note, locations may vary in terms of availability for Face-to-Face Counselling.
        Currently, Face-to-face Counselling Sessions can only be booked at:`
      ]} /> */}
      {/* <Carousel /> */}
      {/* <Address/> */}
      {/* <Section paras={[
        <>
          Please feel free to <HyperRef link='/contact#header' value='contact me'/> to inquire about the possibility of face-to-face counselling in another location that the latter.
          In any location, the following measures will be put in place for your Health &#38; Safety:
        </>
      ]} /> */}
      {/* <Precautions /> */}
      <Availability />
      {/* <Warning /> */}
    </>
  )
}