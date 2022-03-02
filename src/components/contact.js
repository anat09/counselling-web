import { Details } from './landing';
import HyperRef from './hyperRef';
import Section from './section';
import Warning from './warning';

export default function Contact() {
  return (
    <>
      <Section paras={[
        `All calls, messages, and emails are confidential.`,
        `If I am unable to answer, please leave a message with your phone number.`,
        `I will return your call/message within 24hs.`
      ]} />
      <Details />
      <Section paras={[
        <>
          If you feel that you are experiencing a <span className="text-primary font-bold">mental health crisis</span> where you are concerned
          about <span className="text-primary font-bold">your own safety</span> or someone else's, please follow the link to the <HyperRef link={'/emergency'} value={'Emergency Contact'} /> page.
        </>,
        <>
          Counselling is a type of talking therapy that can support you when you are
          <span className="text-primary font-bold"> not at immediate risk</span> to yourself/to/from others;
        </>,
      ]} />
      <Warning />
    </>
  )
}
