import Section from '../section';
import SubHeader from '../subHeader';

import { second, third, fourth } from './content';

const Experience = () => {
  return (
    <>
      {/* <SubHeader title={'Work Experience'} /> */}
      <Section paras={second} />
      <SubHeader title={'Training & Qualifications'} />
      <Section paras={third} />
      <SubHeader title={'Further Training'} />
      <Section paras={fourth} />
    </>
  )
}

export default Experience;