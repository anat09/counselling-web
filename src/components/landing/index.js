import React from 'react';

import Availability from '../availability';
import Section from '../section';

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

const Areas = () => {
  const TickIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
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
  ]
  return (
    // <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
    <>
      <div className="flex flex-col p-2">
        <div className="font-lato text-primary text-2xl py-2 font-bold">Areas of Counselling</div>
        { 
          areas.map((area, idx) => {
            return (
              <div key={idx} className="flex flex-row items-center justify-start">
                <div className="text-primary"><TickIcon /></div>
                <div className="font-lato p-2.5  text-lg">{ area }</div>
              </div>
            )
          })
        }
      </div>
    </>
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
    <div className="grid grid-cols-3">
      <List entries={languages} name={"My Languages"}/>
      <List entries={clients} name={"My Expertise"}/>
      <List entries={types} name={"My Methods"}/>
    </div> 
  )
}

export default function Landing() {
  return (
    <>
      <Section paras={firstParas} />
      <Details />
      <Section paras={secondParas} />
      <Areas />
      <Section paras={thirdParas} />
      <Skills />
      <Availability />
    </>
  )
}