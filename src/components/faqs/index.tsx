import React from 'react';
import Accordion from '../accordion';

import items from './content';

export default function FAQs() {
  return (
    <>
      <Accordion items={items}/>
      {/* <Warning /> */}
    </>
  )
}