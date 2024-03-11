import EmergencyOptions from './emergencyOptions'
import Section from './section';
import SubHeader from './subHeader';

export default function Emergency() {
  return (
    <>
      <SubHeader title='Emergency Contacts' />
      <Section paras={[`No matter what you are going through, please know that there is a great amount of support out there.`]} />  
      <EmergencyOptions />
      <Section paras={[`Counselling is a type of talking therapy that can support you when you are not in
          immediate danger to yourself or to/from others. If the above does not apply to how you are currently feeling, and you are looking for counselling support, please do not hesitate to get in touch with me, by completing the form below.`]} />
    </>
  )
}