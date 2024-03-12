import React from 'react';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';
import DetailsOne from '../landing/detailsOne';
import DetailsTwo from '../landing/detailsTwo';

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
      <DetailsOne />
      <Section paras={secondParas} />
      <Section paras={thirdParas} />
      <DetailsTwo />
      <SubHeader title={'Câteva din experiențele cu care am lucrat până acum într-un mod terapeutic'} />
      <TickList list={areas} />
      <Section paras={fourthParas} />
      <SubHeader title={'Disponibilitate'} />
      <Section paras={availability} />
    </>
  )
}