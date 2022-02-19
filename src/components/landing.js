import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const FirstSection = () => {
  return (
    <section className="font-lato p-2.5">
      <p className="para">Hi there,</p>
      <p className="para">
        Welcome to my counselling practice webpage. Reaching out takes a lot of courage, and you are here now.
        So, let’s appreciate that for a moment! You may be taking those small, yet overwhelming steps in looking
        after yourself and putting your wellbeing first – something you may have been postponing for a long time.
        Whether you find that my counselling approach suits you or not, try not to lose sight of these steps
        you are bravely taking right now.  
      </p>
      <p className="para">
        I am Anamaria, a <span className="underline">BACP Registered Integrative Counsellor</span> offering Counselling from the area of Greater Manchester and Cheshire. 
      </p>
      <p className="para">
        I aim to offer a safe and non-judgemental space for you to explore whatever is going on for you right now. 
        Depending on our sense of safety and the support around us, we may be able to handle life challenges very well most of the time.
        However, sometimes we may feel overwhelmed, confused, or completely burnt out. I am here to support you along the way.
      </p>
      <p className="para">
        By scrolling down you will find a bit more about my training background, which will hopefully also give you an idea about how I work
        as a counsellor. If you would like to get in touch to book a first initial consultation, or if you have any inquiries,
        please feel free to use the following <b>contact details</b>:
      </p>
    </section>
  )
}

export const Details = () => {
  const UserIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  };
  const MailIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  };
  const PhoneIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  };
  const Logo = () => {
    return (
      <Image 
        src='/assets/img/logo.png'
        quality={100}
        width={337}
        height={150}
      />
    )
  }
  return (
    <div className="flex sm:flex-row flex-col justify-evenly items-center">
      <div>
        <div className="flex flex-row items-center">
          <div className="text-secondary"><UserIcon /></div>
          <div className="font-lato p-2.5">{ process.env.NEXT_PUBLIC_PROFESSIONAL_NAME }</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-secondary"><MailIcon /></div>
          <div className="font-lato p-2.5">{ process.env.NEXT_PUBLIC_EMAIL_ADDRESS }</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-secondary"><PhoneIcon /></div>
          <div className="font-lato p-2.5">{ process.env.NEXT_PUBLIC_PHONE_NUMBER }</div>
        </div>
      </div>
      <div className="mt-6 sm:mt-0">
        <Logo /> 
      </div>
     
    </div>
  )
}

const SecondSection = () => {
  return (
    <section className="font-lato p-2.5">
      <p className="para">
        I have been working in mental health settings for over 7 years, with people from various backgrounds and ages,
        in the areas of Greater Manchester, Staffordshire, and West Midlands.  In my roles I worked collaboratively with people,
        to identify how I can best support them in: <b>building their confidence, finding self-appreciation, learning about themselves, </b> 
        and, above all, <b>learning how to look after themselves</b>. 
      </p>
      <p className="para">
        A great part of my clients have also been non-native English speakers, coming from multicultural backgrounds. In our work we explored
        how cultural differences shaped who we are and how we can use them to our benefit. A great amount of my work has focused on supporting
        employees nationally &#38; students from various locations with their mental health. I have also extensively worked with survivors of neglect,
        emotional, sexual, and/or domestic abuse within various organisations across the UK.
      </p>
      <p className="para">
        Some of the life challenges that my client group experienced are listed below: 
      </p>
    </section>
  )
}

const ThirdSection = () => {
  return (
    <section className="font-lato p-2.5">
      <Link href="/about"><button><strong>Counselling Approach &#38; Training</strong></button></Link>
      <p className="para">
      I use an <i>Integrative Approach in Counselling</i> by tailoring each session to your needs. This means that throughout our work together,
      I draw on my knowledge &#38; training in various therapeutic modalities, along with my understanding of personal development to support you to the best of my abilities.  
      </p>
    </section>
  )
}

const List = ({ entries, name }) => {
  return (
    <ul>
      <li className="font-lato underline text-lg text-center">{ name }</li>
      {
        entries.map((entry, idx) => (
          <li key={idx} className="font-lato text-center pt-1">{ entry }</li>
        ))
      }
    </ul>
  )
}

const Areas = () => {
  const TickIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  const areas = [
    "Abuse (Emotional, Physical, Sexual, Neglectful, Narcissistic)",
    "Anxiety & Panic Attacks",
    "Bullying & Harrasment",
    "Childhood Trauma & Trauma Experienced in Adulthood",
    "Depression & Unhappiness",
    "Domestic Abuse",
    "Emotional Regulation",
    "Grief, Loss, & Bereavement (incl. Perinatal Bereavement)",
    "Troubles with Identity (Personal & Gender-related)",
    "Neurodiversity",
    "Personal Growth & Development",
    "Procrastination",
    "Self Confidence, Self Image, & Self Criticism",
    "Self-Harm, Suicidal Thoughts, & Ideation",
    "Relationships, Family Conflicts, & Issues",
    "Stress & Work Related Concerns",
  ]
  return (
    // <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
    <>
      <div className="flex flex-col">
        <div className="font-lato text-2xl p-2.5 underline font-bold">Areas of Counselling</div>
        { 
          areas.map((area, idx) => {
            return (
              <div key={idx} className="flex flex-row items-center justify-start">
                <div className="text-primary"><TickIcon /></div>
                <div className="font-lato p-2.5">{ area }</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

const Skills = () => {
  const languages = [
    "English",
    "Romanian",
    "Spanish & Italian"
  ]
  const clients = [
    "Young People",
    "Students",
    "Adults",
  ]
  const types = [
    "Face-to-face",
    "Online",
    "Telephone",
  ]
  return (
    <div className="grid grid-cols-3">
      <List entries={languages} name={"My Languages"}/>
      <List entries={clients} name={"My Expertise"}/>
      <List entries={types} name={"My Methods"}/>
    </div> 
  )
}

export default function Landing() {
  return (
    <>
      <FirstSection />
      <Details />
      <SecondSection />
      <Areas />
      <ThirdSection />
      <Skills />
    </>
  )
}