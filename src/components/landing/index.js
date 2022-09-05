import React from 'react';

import Availability from '../availability';
import Details from './details';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';

import ProfPic from './profPic';

import { firstParas, secondParas, thirdParas } from './content';

const List = ({ entries, name }) => {
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
    "Remote Only",
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
  "Abuse (Emotional, Physical, Sexual, Neglectful, Narcissistic)",
  "Anxiety",
  "Bullying & Harrasment",
  "Childhood Trauma & Trauma Experienced in Adulthood",
  "Dealing with Burnout",
  "Depression & Unhappiness",
  "Domestic Abuse",
  "Emotional Regulation",
  "Grief, Loss, & Bereavement (incl. Perinatal Bereavement)",
  "Issues with Identity (Personal & Gender-related)",
  "Neurodiversity",
  "Personal Growth & Development",
  "Procrastination",
  "Relationships, Family Conflicts, & Issues",
  "Self Confidence, Self Image, & Self Criticism",
  "Self-Harm & Suicidal Ideation",
  "Stress & Work Related Concerns",
]

export default function Landing() {
  return (
    <>
      <div className="md:flex flex-grow items-center">
        <Section paras={firstParas} />
        <ProfPic />
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