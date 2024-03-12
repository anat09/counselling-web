import React from 'react';

import DetailsTwo from './detailsTwo';
import DetailsOne from './detailsOne';
import Section from '../section';
import SubHeader from '../subHeader';
import FAQs from '../faqs';
import FAQPic from './faqPic';

import { seventhParas, sixthParas, fifthParas, firstParas, fourthParas, secondParas, thirdParas } from './content';

interface ListProps {
  entries: string[],
  name: string,
}

const List = ({ entries, name }: ListProps) => {
  return (
    <ul>
      <li className="font-lato text-primaryDark font-bold text-xl text-center">{ name }</li>
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
      <DetailsOne/>
      <Section paras={secondParas} />
      <Section paras={thirdParas} />
      <DetailsTwo/>
      <Section paras={fourthParas} />
      <Section paras={fifthParas} />
      <SubHeader title={'Areas of Counselling'} />
      <Areas/>
      <br />
      <Section paras={sixthParas} />
      <Skills />
      <FAQPic/>
      <FAQs />
      <Section paras={seventhParas} />
    </>
  )
}