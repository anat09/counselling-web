import HyperRef from '../hyperRef';
import Section from '../section';
import TickList from '../tickList';

const first = [
  
  `I use an integrative approach in my work with clients, focusing on building a trusting 
  and non-judgemental relationship with you as a client.I hold and MSc (Master of Science) in Counselling and Psychotherapy 
  and BSc (Bachelor of Science) in Psychology.`, 
 ` My training background includes extensive training in Person-Centred Therapy, complemented by techniques from 
  other therapeutic modalities such as Solution Focused Therapy (SFT), 
  Compassionate Focused Therapy (CFT), and Cognitive Behavioural Therapy (CBT). This blend allows me to offer 
  counselling and psychotherapy that is both integrative and adaptive to your individual needs. I strongly believe there 
  isn't a "one size fits all" type of therapy, and that it has to work for you.`,

  `My commitment to professional growth includes regular participation in 
  Continuous Professional Development (CPD) workshops. These workshops have covered a range of topics, including:`,  
  <TickList list={[
  
  `Emotional Resilience and Agility, Building Self-Confidence, Procrastination, Jealousy;`,
  `Neurodiversity, GSRD (Gender, Sexual, and Relationship Diversity);`,
  `Cultural differences and Intersectionality of Race, Gender, Disability;`,
  `Building Therapeutic Trust and Rapport, Grief and Loss;`,
  `Managing and Holding Difficult Conversations in the Therapy Room`, 
  `Anxiety and Stress, Chronic illness and Cancer;`,
]} />

]

const second = [

  `I have been working in the mental health field for nearly 10 years, and had the priviledge to support people from various
  backgrounds and ages. I began supporting students and young people with their mental
  health, disability, & neurodivergent experiences (across various universities in North-West in Greater
  Manchester and Lancashire) and worked with various organisations across the country (SafeNet, The Growing Club, 
  Savana - Stoke-on-Trent, and various EAP - Employee Assistance Companies such as Bupa and Health Hero). 
  I now work as a counsellor in Private Practice and support clients remotely and face to face in Manchester, 
  alongside my role as a Specialist Student Mental Health Mentor (with Moodswings).`,

  `My career has been driven by a passion for making a genuine difference in people's lives and this extensive work experience 
  helps me to engage deeply with all my clients. A core part of my practice has been to foster 
  an inclusive environment that respects diversity and inclusivity, ensuring a space where every client can feel understood and valued. 
  Needless to say, I have a strong commitment to checking my own biases and priviledges, so that you can feel safe 
  and heard in the therapy room. This allows us to have honest and open conversations about your experiences and 
  confidently explore any impact of multiculturalism, neurodiversity, disabilities and/or differences on
  your wellbeing. `,


]

const third = [
  `During our first session we will use the space to find out what brings you to therapy.
  Depending on what is going on for you, we will identify together
  areas you wish to work on, which will be reviewed throughout our work together.
  Above all, I want you to be in control of your growth.`,
  `There are times we need to talk things through and sometimes a therapeutic space
  can be just what we need to overcome the difficulties we face, to feel heard, and share
  how we feel with someone who is able and willing to sit with us in that vulnerable space.`,
  `I work from a genuine and caring place, and often bring elements of
  psychoeducation - This process aims to help your understanding of all those bits of
  you that make you who you are and understand your relationship(s). In my practice so far, this has been a key element to
  help my clients to make sense of their feelings and experiences. This allowed them
  to create a calmer and more enjoyable experience for themselves.`,
  `That being said, the counselling sessions are guided by what brings you to therapy
  and we will work together to explore what is happening for you at your pace.`
]

const fourth = [
  `Counselling sessions usually last 50 minutes each and usually take place weekly. 
  There is no obligation for you to continue our work if you feel I am not the
  right counsellor for you, or if you feel that you wish to take a break from therapy.`,
  `The number of sessions you will have depends on what you wish to explore. Some
  people find that a few sessions can provide them with enough insight to return to their
  daily life activities, with a different mindset. Others find it more benecifial to extend 
  their support, work on their difficulties for longer and delve deeper into their life experiences.`,
  `Trust can be challenging, especially following experiences of loss, trauma, or significant life changes. 
  These events, whether seemingly minor or major to others, can profoundly impact our ability to trust others and our wellbeing. 
  However, they affect everyone differently and we all experience
  sadness, loss, trauma, happiness, joy - everything - in our own way and at our pace. 
  That being said, I believe your wellbeing and recovery doesn't have a set number of sessions. It is unique to you.`,
  `If you're seeking a safe environment to explore your thoughts and feelings, 
  and if this approach to counselling speaks to you, I invite you to reach out. 
  Together, we can discuss your specific circumstances and how I can support your personal growth, 
  self-understanding and wellbeing.`
]

const fifth = [
  `Therapy Sessions are £60 per session. I have limited availability for reduced rates for students, unemployed, and low income earners. Please contact me to discuss this.`,
]

const sixth = [
  <>If you feel that you are experiencing a mental health crisis where are concerned about
  your own safety or someone else's, please see <HyperRef link='/emergency#header' value='Emergency Contact'/>.</>,
  `Counselling is a type of talking therapy that can support you when you are not in
  immediate danger to yourself or to/from others.`
]

const seventh = [
  `Each counselling session is confidential, between yourself and your counsellor. The
  only instance in which this confidentiality will be breached is if:`,
  `- Your safety or someone else's is at immediate risk;`,
  `- The safety of Children/Young Adults/ Vulnerable Adults is at risk, in accordance with
  Safeguarding Policies;`,
  `- Something mentioned in the sessions breaches The Terrorism Act (2006) or Drug
  Trafficking Act (1994)`,
  `In each of these instances your counsellor will try to discuss breaching confidentiality
  with you prior to this occurring.`,
  `I also keep regular notes of our sessions, to keep track of our work together. However,
  these will not have your contact details, or any identifiable information attached to
  them. They are also securely kept in accordance with GDPR (General Data Protection
  Regulation) Act (2018). Counsellors sometimes use their notes for purposes of case
  work evaluation with their supervisor. This is to ensure your work with them is safe
  Again, these notes will not contain any identifiable information.`
]

export const eighth = [
  `Online Therapy Sessions can be booked on
   Tuesday - Thursdays.`,
  `Face-to-face Counselling Sessions can only be booked Fridays in M21 (Manchester, Chorlton-cum-Hardy).`
]

export default [
  {
    header: "What is your therapy approach and training?",
    content: <Section paras={first}/>
  },
  {
    header: "What is your work experience?",
    content: <Section paras={second} />
  },
  {
    header: "What can I expect from my counselling sessions with you?",
    content: <Section paras={third} />
  },
  {
    header: "How many sessions do I need?",
    content: <Section paras={fourth} />
  },
  {
    header: "How much does it cost?",
    content: <Section paras={fifth} />
  },
  {
    header: "What if I need to talk to someone urgently?",
    content: <Section paras={sixth} />
  },
  {
    header: "Is this confidential?",
    content: <Section paras={seventh} />
  },
  {
    header: "What is your availability?",
    content: <Section paras={eighth} />
  },
]