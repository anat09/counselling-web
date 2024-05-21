import HyperRef from '../hyperRef';
import Section from '../section';

const first = [
  
  `I use an integrative approach in my work focusing on building a trusting 
  and non-judgemental relationship with you as a client. I hold an MSc (Master of Science) in Counselling and Psychotherapy 
  and BSc (Bachelor of Science) in Psychology.`, 
 ` My training background includes training in Person-Centred Therapy, complemented by techniques from 
  other therapeutic modalities such as Solution Focused Therapy (SFT), 
  Compassionate Focused Therapy (CFT), and Cognitive Behavioural Therapy (CBT). This knowledge allows me to offer 
  counselling and psychotherapy that is both integrative and adaptive to your individual needs.`,
]
const third = [
  `During our first session we will use the space to find out what brings you to therapy. 
  Depending on what is going on for you, we will identify together areas you wish to work on, 
  which will be reviewed throughout our work together. That being said, the counselling sessions 
  are guided by what brings you to therapy and we will work together to explore what is going on for you, at your pace.`,
  `This first session is also an opportunity for us to see whether we are a good fit to work together. Should this 
  not be the case, I will do my best to refer you to another therapist who may be better suited to your needs.`
]

const fourth = [
  `Counselling sessions usually last 50 minutes each and usually take place weekly. 
  There is no obligation for you to continue our work if you feel I am not the
  right counsellor for you, or if you feel that you wish to take a break from therapy.`,
  `The number of sessions you will have depends on what you wish to explore. Some
  people find that a few sessions can provide them with enough insight to return to their
  daily life activities, with a different mindset. Others find it more benecifial to extend 
  their support and delve deeper into their life experiences. That being said, I believe your 
  wellbeing and recovery doesn't have a set number of sessions. It is unique to you.`
]

const fifth = [
  `Therapy Sessions are £60 per session. I have limited availability for reduced rates for students, unemployed, and low income earners. Please contact me to discuss this. `,
]

const sixth = [
  <>If you feel that you are experiencing a mental health crisis where are concerned about
  your own safety or someone else's, please see <HyperRef link='/emergency#header' value='Emergency Contact'/>.</>,
  `Counselling is a type of talking therapy that can support you when you are not in
  immediate danger to yourself or to/from others.`
]

const seventh = [
  `Each counselling session is confidential, between yourself and your counsellor. The
  only instance in which this confidentiality would be breached is if your safety or someone else's is 
  at immediate risk or if the safety of children or vulnerable adults is at risk. In each of these instances I would thoroughly 
  explain my concerns, and try to discuss breaching confidentiality with you prior to this occurring.`
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