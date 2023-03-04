import HyperRef from '../hyperRef';
import TickList from '../tickList';

export const second = [
  `I have worked in mental health settings for over 8 years, with people from various
  backgrounds and ages, across the UK. I began supporting students & young people with their mental
  health, disability, & neurodivergent experiences (across various universities in North- West - Greater
  Manchester & Lancaster).`,
  `Since 2018 I have also been working with survivors of childhood sexual abuse and/or domestic
  violence, in various settings and charities across the UK (SafeNet – Lancashire, Concrete & Savana –
  Staffordshire, NAPAC – Nationally). This required me to undertake trauma-informed training and
  allowed me to become a trauma informed therapist.`,
  `Throughout my career I have offered hundrends of single sessions of therapy, as well as comprehensive
  mental health and risk assessments with clients, to establish the best therapeutic approach suitable
  for them going forward.`,
  `My work experience allows me to facilitate conversations with you as a client, where we can identify
  together what works for you and if this is the right therapeutic space for you. Across all my
  experience I worked collaboratively with people, and supported them in building their confidence,
  learning about themselves. Diversity and inclusion also played a big role in my work so far, which
  allows me to confidently explore any impact of multiculturalism, neurodiversity, and differences on
  your wellbeing.`
]

export const third = [
  // <>
  //   As you will see below, my training has been focused on various approaches in therapy,
  //   allowing me to deliver counselling and psychotherapy in an integrative way. This
  //   means that throughout our work together, I draw on my knowledge & training in below
  //   therapeutic modalities (see <HyperRef link='/faq#header' value='FAQs' /> for more information about therapy in general),
  //   along with my understanding of personal development to support you to the best of my ability.
  // </>,
  `My training has been focused on Person Centred Therapy, as well as elements of other approaches
  in therapy, allowing me to deliver counselling and psychotherapy in an
  integrative way. This means that throughout our work together, I draw on my knowledge and below
  training, along with my understanding of personal development to support you to the best of my
  ability.`,
  
  <TickList list={[
  'Master of Science in Counselling & Psychotherapy at Keele University.',
  'Bachelor of Science in Psychology at Lancaster University.'
 ]} />
  // <TickList list={[
  //   "Person-centred Therapy (PCT);",
  //   "Solution-focused Therapy (SFT);",
  //   "Cognitive-behavioural Therapy (CBT)."
  // ]} />,
  // '',  
  // <TickList list={[
  //   "Neurodiversity;",
  //   "Psychopharmacology;",
  //   "Societal stigma;",
  //   "Diversity and inclusivity;",
  //   "Psychological labelling and its impact on an individuals' mental wellbeing."
  // ]} />
]

export const fourth = [
  <TickList list={[
    "Certificate in Trauma-Informed Counselling;",
    "Certificate in Working with children;",
    "Level 3 Training in Safeguarding Adults, Children and Vulnerable Adults;",
    "Certificate in Level 1 (Foundation) in Cognitive Behavioural Therapy;"
  ]} />,
  `I also often attend Continuous Professional Development workshops, where I develop further skills
  to work with difficulties most of my clients may experience. Workshops I attended so far focused on:`,
  <TickList list={[
    "Single Sessions Therapies on topics such as Resilience & Jealousy;",
    `Workshops on working with Neurodiversity, GSRD (Gender, Sexual, and Relationship Diversity),
     Building Trust, Anxiety, Procrastination, Multilingual Clients;`,
    "Understanding the Neurobiology of Trauma;",
    // "Understanding the Mental Health Capacity Act.",
  ]} />,
  <>
    As a registered member of the <HyperRef link='https://www.bacp.co.uk' value="BACP (British Association of Counselling & Psychotherapy)" /> 
    and <HyperRef link='https://nationalcounsellingsociety.org' value="NCS (National Counselling Society)" />, I
    always ensure that my work with you is safe, and conducted to high ethical standard. If
    you have any questions regarding the above, please do not hesitate to <HyperRef link='/contact#header' value="contact me" /> below.
  </>
]