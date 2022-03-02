import React from 'react';
import Section from './section';

const Warning = () => {
  const paras = [
    `If you experience any symptoms of Covid-19 or have recently been in close contact with
    someone who developed these symptoms in the past few days, please do not attend your
    appointment in person and contact me to arrange either an alternative date or an alternative
    remote method of delivery (telephone/video)​.`,
  ]
  return <Section paras={paras} />
}

export default Warning;