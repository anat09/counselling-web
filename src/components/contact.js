import { Details } from '../components/landing'

export default function Contact() {
  return (
    <>
      <div className="text-primary font-lato text-6xl">Contact</div>
      <section className="font-lato p-2.5 items-align flex flex-col items-center">
        <p className="para">All calls, messages, and emails are confidential.</p>
        <p className="para">If I am unable to answer, please leave a message with your phone number. </p>
        <p className="para">I will return your call/message within 24hs.</p>
      </section>
      <Details />
      <section className="font-lato p-2.5 items-align flex flex-col items-center">
        <p className="para">Alternatively, you may wish to use the <strong>Contact Form </strong> below.</p>
        <p className="para">Please feel free to use this to make any inquiries, book an initial session, or a free initial consultation. </p>
      </section>
    </>
  )
}
