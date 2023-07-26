import EmergencyOptions from './emergencyOptions'
import Section from './section.js';

export default function Emergency() {
  return (
    <>
      <Section paras={[`No matter what you are going through, please know that there is a great amount of support out there.`]} />
      <EmergencyOptions />
    </>
  )
}