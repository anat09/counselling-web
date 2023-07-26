import Details from './landing/details';
import HyperRef from './hyperRef';
import Section from './section';
import Warning from './warning';

export default function Contact() {
  return (
    <>
      <Section paras={[
        `To get in touch or book an initial consultation, please complete the enquiry form below.
        Alternatively, you may contact me at:`
      ]} />
      <Details />
      <Section paras={[
        `Please note, I am usually in meetings or counselling sessions. If I am
        unable to answer, please leave a voice or text message with your contact
        number and availability for me to return your call. I will return your
        voicemail/text/email within 48 hs. To protect your privacy, I will only return a
        missed call if I receive communication of your availability and consent for a
        call-back.`,
        `Please note I can only offer a free initial consultation via video call and can only support clients who reside in the UK.`,
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
