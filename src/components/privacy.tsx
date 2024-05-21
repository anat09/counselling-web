import Section from './section';
import SubHeader from './subHeader';

const Privacy = () => {
  return (
    <><SubHeader title='Privacy Policy' />
      <SubHeader title="How ‘AT Counselling Services’ obtains personal information and reasons to do so" />
      <Section paras={[
        `‘AT Counselling Services’ will use the information that you have provided in order for
        you to access the service, and to enable me, as a counsellor, to make arrangements for
        appointments. This will include your name, email address and/or phone number.`,
        `If I become aware of information that suggests that you or someone else is at
        immediate risk or harm, I am required in line with duty of care to contact relevant
        services. This may be done without your permission. This could include contact with
        emergency services, your GP or other healthcare professionals. I would always
        endeavour to speak to you about this first and gain your consent.`,
        `Your information will not be sold or shared with third parties.`
      ]} />
      <SubHeader title="Information Storage, Protection, and Disclaimers" />
      <Section paras={[
        `By getting in touch through this website contact form, you consent to being contacted
        by ‘AT Counselling Services’ in response to your query. If you do not respond to any
        contact attempts or decide you do not wish to continue contact, your details will not be
        retained.`,
        `If you decide to access therapy services, your records will be retained for financial,
        medical, and legal reasons. I am required to keep notes of all therapy sessions, which
        will be stored securely, on password protected devices, for a period of seven years.`,
        `Unfortunately, the transmission of information via the internet is never completely
        secure. Although ‘AT Counselling Services’ will their best to protect your information
        using industry-standard protocols and encryption, we cannot guarantee the security of
        your data transmitted to me via email, including forms completed on this website; any
        transmission is at your own risk. Once ‘AT Counselling Services’ have received your
        information, we will use strict procedures and security features to try to prevent
        unauthorised access.`
      ]} />
      <SubHeader title="Your data protection rights" />
      <Section paras={[
        `Under data protection law, you have rights including:`,
        <><span className="text-primary font-bold">Right of access</span> - You have the right to ask me for copies of your personal information.</>,
        <><span className="text-primary font-bold">Right to rectification</span> - You have the right to ask us to rectify personal information
        you think is inaccurate. You also have the right to ask ‘AT Counselling Services’ to
        complete information you think is incomplete.</>,
        <><span className="text-primary font-bold">Right to erasue</span> - You have the right to ask us ‘AT Counselling Services’ to erase
        your personal information in certain circumstances.</>,
        <><span className="text-primary font-bold">Right to restriction of processing</span> - You have the right to ask ‘AT Counselling Services’ to restrict the 
        processing of your personal information in certain circumstances.</>,
        <><span className="text-primary font-bold">Right to object to processing</span> - You have the right to object to the processing of
        your personal information in certain circumstances.</>,
        <><span className="text-primary font-bold">Right to data portability</span> - You have the right to ask that ‘AT Counselling Services’
        transfers the personal information you gave ‘AT Counselling Services’ to another
        organisation, or to you, in certain circumstances.</>,
        <>You are not required to pay any charge for exercising your rights. If you make a
        request, please do so via emailing <span className="text-primary font-bold">atcounselling.services@gmail.com</span>, and ‘AT Counselling
        Services’ will have one month to respond to you.</>
      ]} />
    </>
  )
}

export default Privacy;