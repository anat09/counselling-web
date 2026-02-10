import React from 'react';
import Section from '../section';
import SubHeader from '../subHeader';
import TickList from '../tickList';
import DetailsOne from '../landing/detailsOne';
import DetailsTwo from '../landing/detailsTwo';
import ProfilePicInRoom from '../landing/profilePicInRoom';
import Carousel from '../carousel';

import { firstParas, secondParas, thirdParas, fourthParas, availability } from './content';

const areas = [

  "Anxietate și atacuri de panică",
  "Creștere și dezvoltare personală",
  "Depresie și nefericire",
  "Doliu și pierdere (inclusiv pierdere din perioada perinatală)",
  "Dificultăți de identitate personală, culturală sau sexuală",
  "Dificultăți sau conflicte în relație sau familie",
  "Extenuare psihică (cunoscută drept “Burnout”)",
  "Încrederea, imaginea, și critica de sine",
  "Procrastinare",
  "Regulare emoțională",
  "Stress și dificultăți în locul de muncă",]

export default function Romanian() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-start-1">
          <ProfilePicInRoom/>
        </div>
        <div className="md:col-start-2 flex justify-center items-center">
          <Section paras={firstParas} />
        </div>
      </div> 
      <br />
      <Section paras={secondParas} />
      <DetailsTwo />
      <Section paras={thirdParas} />
      <br />
      <SubHeader title={'Câteva din experiențele cu care am lucrat până acum într-un mod terapeutic'} />
      <TickList list={areas} />
      <Section paras={fourthParas} />
      <DetailsOne />
      <SubHeader title={'Disponibilitate'} />
      <Section paras={availability} />

    </>
  )
}