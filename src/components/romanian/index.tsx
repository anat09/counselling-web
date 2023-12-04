import React from 'react';

import Availability from '../availability';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';

import Details from '../landing/details';
import ProfPic from '../landing/profPic';

import { firstParas, secondParas, thirdParas, fourthParas, availability } from './content';

const areas = [

  "Anxietate și atacuri de panică",
  "Creștere și dezvoltare personală",
  "Depresie și nefericire",
  "Doliu și pierdere (inclusiv pierdere din perioada perinatală)",
  "Dificultăți de identitate personală, culturală sau sexuală",
  "Dificultăți sau conflicte în relație sau familie",
  "Extenuare psihică (cunoscută drept “Burnout”)",
  "Hărțuire (cunoscută drept “Bullying”)",
  "Încrederea, imaginea, și critica de sine",
  "Neurodiversitate",
  "Procrastinare",
  "Regulare emoțională",
  "Stress și dificultăți în locul de muncă",]

export default function Romanian() {
  return (
    <>
      <div className="md:flex flex-grow items-center">
        <Section paras={firstParas} />
        {/* <ProfPic /> */}
      </div>
      <Section paras={secondParas} />
      <Details />
      <Section paras={thirdParas} />
      <SubHeader title={'Câteva din experiențele cu care am lucrat până acum într-un mod terapeutic'} />
      <TickList list={areas} />
      <Section paras={fourthParas} />
      <SubHeader title={'Disponibilitate'} />
      <Section paras={availability} />
    </>
  )
}