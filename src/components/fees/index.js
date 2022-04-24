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
      header: "Face-to-Face Counselling",
      content: <Section paras={[
        'I offer Face-to-Face counselling sessions from various locations - see below. Each session costs £50-£60.',
      ]}/>
    },
    {
      header: "Online & Remote Video Counselling",
      content: <Section paras={[
        `I offer 50 minutes online counselling sessions. Each session costs £50-£60. These can be held via
        Skype, Zoom, Google Meets, or a platform of your choice.`
      ]} />
    },
    {
      header: "Telephone Counselling",
      content: <Section paras={[
        `I offer 50 minutes telephone counselling sessions. Each session costs £50-£60.`
      ]} />
    },
    {
      header: "Concessions and Reduced Rates",
      content: <Section paras={[
        `I have limited spaces for discounted counselling fees for clients who may be on a low income,
        unemployed, students or counsellors in training. I also offer a discounted rate for booking counselling sessions in a block of six or more.
        Please do not hesitate to contact me to make any arrangements. I endeavour to support you to the best of my ability.`
      ]} />
    },
  ]
  return (
    <>
      <Section paras={[
        `I usually have availability to offer a free initial 20 minutes telephone consultation. This is a
        conversation where we can discuss how and if I can support you. It is also an opportunity for
        you to see if I am the right person for you.`,
        `Afterwards, I have availability for the following:`
      ]} />
      <Accordion items={items} />
      <Section paras={[
        `I work privately from various places in Greater Manchester and Cheshire: The Heatons, Cheadle, and South Manchester.`,
        `Please note, locations may vary in terms of availability for Face-to-Face Counselling.
        Currently, Face-to-face Counselling Sessions can only be booked at:`
      ]} />
      <Carousel />
      <Address/>
      <Section paras={[
        <>
          Please feel free to <HyperRef link='/contact#header' value='contact me'/> to inquire about the possibility of face-to-face counselling in another location that the latter.
          In any location, the following measures will be put in place for your Health &#38; Safety:
        </>
      ]} />
      <Precautions />
      <Availability />
      <Warning />
    </>
  )
}