import React from 'react';
import AccordionItem from './accordionItem';
import HyperRef from './hyperRef';

const Accordion = () => {
  const items = [
    {
      header: "Online Counselling",
      content: <p className="para">I offer <strong>50 minutes</strong> online counselling sessions. Each session costs £45. These can be held via Skype, Google Meets, or a platform of your choice.</p>
    },
    {
      header: "Telephone Counselling",
      content: <p className="para">I offer <strong>50 minutes</strong> telephone counselling sessions. Each session costs £45.</p>
    },
    {
      header: "Face-to-face Counselling",
      content: <p className="para">I offer <strong>50 minutes</strong> face-to-face counselling sessions*. Each session costs £45.</p>
    },
    {
      header: "Concessions",
      content: <p className="para">I offer <strong>discounted counselling fees </strong> online counselling sessions. for anyone who is either on a low income, unemployed, a student, and so on.
      Please do not hesitate to contact me to make any arrangements.<strong>I wish to support you in the best way that I can.</strong></p>
    },
  ]
  return (
    <div id="accordionExample">
      {
        items.map((item, idx) => <AccordionItem key={idx} title={item.header} content={item.content}/>)
      }
    </div>
  )
}

const Precautions = () => {
  const TickIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  const areas = [
    "Screen protectors between yourself and your counsellor (in some locations);",
    "All sitting areas are sanitized prior to your arrival and after the counselling session;",
    "Hand Sanitizers available at the entrance of the building and in the therapy room;",
    "A distance of 2m between yourself and your counsellor that shall be kept at all time;",
    "Your counsellor will open & close doors for you, so you do not have to touch any surfaces other than those in your sitting area;",
  ]
  return (
    <>
      <div className="flex flex-col">
        { 
          areas.map((area, idx) => {
            return (
              <div key={idx} className="flex flex-row items-center">
                <div className="text-primary"><TickIcon /></div>
                <div className="font-lato p-2.5 italic">{ area }</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default function Fees() {
  return (
    <>
      <section className="font-lato p-2.5">
        <p className="para">
          I offer a free initial 30 minutes telephone consultation. This is a conversation
          where we can discuss how I can support you. It is also an opportunity for you to see if I am the right person for you.
        </p>
        <p className="para">Afterwards, I have availability for the following:</p>
      </section>
      <Accordion />
      <section className="font-lato p-2.5">
        <p className="para">I work privately in various places in South Manchester (West Didsbury, Cheadle, Fallowfield, Withington) &#38; Newcastle-under-Lyme.</p>
        <p className="para">
          *At the moment, locations may vary in terms of availability for Face-to-Face Counselling.
          Please <HyperRef link={'/contact'} value={'contact me'}/> to inquire about the possibility of face-to-face counselling. In each location,
          the following measures will be put in place for your Health &#38; Safety:
        </p>
      </section>
      <Precautions />
    </>
  )
}