import React from 'react';

import DetailsTwo from './detailsTwo';
import DetailsOne from './detailsOne';
import Section from '../section';
import SubHeader from '../subHeader';
import FAQs from '../faqs';
import Carousel from 'components/carousel';
import ProfilePic from './profilePic';
import ProfilePicInRoom from './profilePicInRoom';
import ScrollToTopButton from './scrollButton'; 
import HyperRef from '../hyperRef';
import { firstParas, secondParas,thirdParas, fifthParas, seventhParas,} from './content';

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
    "Adults & Young Adults",
    "Young Professionals & Students",
    "Older Adults",
  ]
  const types = [
    "Face to Face",
    "Video/Online",
    "Telephone",
  ]
  return (
    <>
      <div className="grid grid-cols-3 py-4 text">
        <List entries={languages} name={"Languages Available"}/>
        <List entries={clients} name={"Client Group"}/>
        <List entries={types} name={"Counselling Available"}/>
      </div>
      <Section paras={[
        <div className='text-center' >*I can offer therapy in both English and/or Romanian, and I have a strong conversational understanding of Spanish and Italian. </div>,
        <div className='text-center' >Pentru informații în limba română, vizitați <HyperRef link='/romana#title' value="această pagină" />. </div>,
      ]} />
    </>
  )
}

const Areas = () => {
  const Issues1 = [
    `Anxiety & Worrying`,
    'Autism & Dyslexia',
    `Dealing with Burnout`,
    `Depression & Unhappiness`,
    `Disability & Chronic Illness`,
    `Emotional Regulation`,
    `Grief, Loss, & Bereavement`,
    `GSRD (Gender, Sexual, and Relationship Diversity)`,
  ]
  const Issues2 = [
    `Identity & Cultural Issues`,
    `LGBTIQA+ Issues`,
    `Personal Growth & Development`,
    `Procrastination`,
    `Relationship Difficulties`,
    `Self Confidence, Self Image, & Self Criticism`,
    `Stress & Work Related Concerns`,
    `Trauma & Childhood Difficulties`,
  ]
  
  return (
      <div className="grid grid-cols-2 py-0">
        <List entries={Issues1} name={""}/>
        <List entries={Issues2} name={""}/>
        </div>
  )
}

export default function Landing() {
  return (
    <>
     <Section paras={firstParas} />
     <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-start-1">
          <ProfilePicInRoom/>
        </div>
        <div className="md:col-start-2 flex justify-center items-center">
        <DetailsTwo/>
        </div>
      </div>
      <br />    
      <Section paras={secondParas} />  
      <br />
      <Section paras={thirdParas} />   
      <SubHeader title={'These are some of the specific areas that I could help you with'} />
      <br />
      <Areas/>
      <br />
      <br />
      <br />
      <SubHeader title={'The Counselling Room'} />
      <Carousel />
      <br />   
      <br />
      <Skills />
      <br />
      <SubHeader title={'Frequently Asked Questions'} />
      <FAQs />
      <br />
      <DetailsOne/>
      <Section paras={fifthParas} />
      <br />
      <DetailsTwo/>
      <Section paras={seventhParas} />
      <ScrollToTopButton />
      
    </>
  )
}
