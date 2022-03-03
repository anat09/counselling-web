import React from 'react';

import Availability from '../availability';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';

import Icons from './icons';
import Logo from './logo';

import { firstParas, secondParas, thirdParas } from './content';

export const Details = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-evenly items-center">
      <div>
        <Icons />
      </div>
      <div className="sm:mt-0 mt-10">
        <Logo /> 
      </div>
    </div>
  )
}

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
    "Spanish & Italian"
  ]
  const clients = [
    "Young People",
    "Students",
    "Professionals",
  ]
  const types = [
    "Face-to-Face",
    "Online Video",
    "Telephone",
  ]
  return (
    <div className="grid grid-cols-3 pb-2">
      <List entries={languages} name={"My Languages"}/>
      <List entries={clients} name={"My Expertise"}/>
      <List entries={types} name={"My Methods"}/>
    </div> 
  )
}

const areas = [
  "Abuse (Emotional, Physical, Sexual, Neglectful, Narcissistic)",
  "Anxiety & Panic Attacks",
  "Bullying & Harrasment",
  "Childhood Trauma & Trauma Experienced in Adulthood",
  "Depression & Unhappiness",
  "Domestic Abuse",
  "Emotional Regulation",
  "Grief, Loss, & Bereavement (incl. Perinatal Bereavement)",
  "Troubles with Identity (Personal & Gender-related)",
  "Neurodiversity",
  "Personal Growth & Development",
  "Procrastination",
  "Self Confidence, Self Image, & Self Criticism",
  "Self-Harm, Suicidal Thoughts, & Ideation",
  "Relationships, Family Conflicts, & Issues",
  "Stress & Work Related Concerns",
  "Dealing with Burnout"
]

export default function Landing() {
  return (
    <>
      <Section paras={firstParas} />
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