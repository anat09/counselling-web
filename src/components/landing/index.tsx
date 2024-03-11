import React from 'react';


import Details from './details';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';
import FAQs from '../faqs';

import { firstParas, fourthParas, secondParas, thirdParas } from './content';

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
          <li key={idx} className="font-lato text-lg text-center pt-4">{ entry }</li>
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
        `To find out more about how I work and what you can expect from our sessions, please see "Frequently Asked Questions" (FAQs)  below, where hopefully most of your questions
  will be answered. If you have any further questions, please do not hesitate to contact me.`
      ]} />
    </>
  )
}

const Areas = () => {
  const Issues = [
    `Anxiety & Worrying`,
    `Bullying`,
    `Dealing with Burnout`,
    `Depression & Unhappiness`,
    `Disability & Chronic Illness`,
    `Emotional Regulation`,
    `Grief, Loss, & Bereavement`,
    `GSRD (Gender, Sexual, and Relationship Diversity)`,
    `Neurodivergent Experiences`,
    `Personal Growth & Development`,
    `Procrastination`,
    `Relationship Difficulties`,
    `Self Confidence, Self Image, & Self Criticism`,
    `Stress & Work Related Concerns`,
  ]
  
  return (
      <div className="grid grid-cols-1 py-0">
        <List entries={Issues} name={""}/>
        </div>
  )
}

export default function Landing() {
  return (
    <>
      <div className="md:flex flex-grow items-center">
        <Section paras={firstParas} />
        {/* <ProfPic /> */}
      </div>
      <Details />
      <Section paras={thirdParas} />
      <Section paras={secondParas} />
      <SubHeader title={'Areas of Counselling'} />
      <Areas/>
      <br />
      <Skills />
      <SubHeader title={'FAQs'} />
      <FAQs />
      <Section paras={fourthParas} />
    </>
  )
}