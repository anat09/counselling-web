import React from 'react';


import Details from './details';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';
import FAQs from '../faqs';

import { firstParas, secondParas, thirdParas } from './content';

interface ListProps {
  entries: string[],
  name: string,
}

const List = ({ entries, name }: ListProps) => {
  return (
    <ul>
      <li className="font-lato text-primary font-bold text-xl text-center">{ name }</li>
      {
        entries.map((entry, idx) => (
          <li key={idx} className="font-lato text-lg text-center pt-1">{ entry }</li>
        ))
      }
    </ul>
  )
}



const Skills = () => {
  const languages = [
    "English",
    "Romanian",
    "Spanish & Italian*"
  ]
  const clients = [
    "Adults",
    "Students & Professionals",
    "Older Adults",
  ]
  const types = [
    "Face to Face",
    "Online Video",
    "Telephone",
  ]
  return (
    <>
      <div className="grid grid-cols-3 py-4">
        <List entries={languages} name={"Languages Available"}/>
        <List entries={clients} name={"Client Group"}/>
        <List entries={types} name={"Counselling Available"}/>
      </div>
      <Section paras={[
        `*I can offer therapy in both English and/or Romanian, and I have a strong understanding of Spanish and Italian.`,
        `To find out more about how I work and what you can expect from our sessions, please see "Frequently Asked Questions" below, where hopefully most of your questions
  will be answered. If you have any further questions, please do not hesitate to contact me.`
      ]} />
    </>
  )
}

const areas = [
  "Anxiety & Worrying",
  "Bullying",
  "Dealing with Burnout",
  "Depression & Unhappiness",
  "Emotional Regulation",
  "Grief, Loss, & Bereavement",
  "Identity (Personal & Gender-related)",
  "Neurodivergent Experiences",
  "Personal Growth & Development",
  "Procrastination",
  "Relationship Difficulties",
  "Self Confidence, Self Image, & Self Criticism",
  "Stress & Work Related Concerns",
]

export default function Landing() {
  return (
    <>
      <div className="md:flex flex-grow items-center">
        <Section paras={firstParas} />
        {/* <ProfPic /> */}
      </div>
      <Details />
      <Section paras={secondParas} />
      <SubHeader title={'Areas of Counselling'} />
      <TickList list={areas} />
      <Section paras={thirdParas} />
      <Skills />
      <SubHeader title={'Frequently Asked Questions - FAQs'} />
      <FAQs />
    </>
  )
}