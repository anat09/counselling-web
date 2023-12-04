import React from 'react';

import Availability from '../availability';
import Details from './details';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';

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
    "Young Adults",
    "Adults",
    "Students & Professionals",
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
        `*Please note that I am officially a bilingual practioner in English and Romanian,
        with a strong understanding of Spanish and Italian. Whilst I may not always be
        able to offer direct counselling in Spanish or Italian, I have extensive experience
        in using my knowledge of certain terminologies and processes that clients
        may experience in these languages.`
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
      <Availability />
    </>
  )
}