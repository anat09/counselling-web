import Details from './landing/details';
import HyperRef from './hyperRef';
import Section from './section';
import Warning from './warning';

export default function Contact() {
  return (
    <>
      <Section paras={[
        `To get in touch or book a session, please complete the enquiry form below.
        Alternatively, you may contact me at:`
      ]} />
      <Details />
      <Section paras={[
        `Please note, I will reply to your
        email and contact within 48 hs.`,
        `Please note I can only support clients who reside in the UK.`,
        <>
          If you feel that you are experiencing a <span className="text-primary font-bold">mental health crisis</span> where you are concerned
          about <span className="text-primary font-bold">your own safety</span> or someone else's, please follow the link to the <HyperRef link='/emergency#header' value='Emergency Contact' /> page.
        </>,
        <>
          Counselling is a type of talking therapy that can support you when you are
          <span className="text-primary font-bold"> not at immediate risk</span> to yourself or to/from others.
        </>,
      ]} />
      {/* <Warning /> */}
    </>
  )
}
