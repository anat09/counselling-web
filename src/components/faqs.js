import React from 'react';
import AccordionItem from './accordionItem';
import HyperRef from './hyperRef';

const Accordion = () => {
  const items = [
    {
      header: "What is counselling?",
      content: (
        'content'
        // <>
        //   <p className="para">Counselling is a type of talking therapy* in which you can explore your feelings, emotions and thoughts in a non-judgemental, safe, and confidential environment.</p>
        //   <p className="para">
        //     Healing, change, recovery – these are all things that you can achieve through talking therapies. Whilst your counsellor may not be able to give you direct advice,
        //     they can support you in finding out what feels right for you, in a safe manner. When I first had counselling, I wanted answers – then and there. I wanted this person to
        //     tell me what to do, and above all, to tell me what was wrong with me. But of course, they could not do that, because they were not me. Just like no one will ever be you.
        //     I had to learn how my past experiences guided my current actions, my current fears, thoughts, and worries.
        //   </p>
        //   <p className="para">
        //     When I began to train as a counsellor, I soon realised that understanding the way we feel and think is a process that takes time and commitment. Finding acceptance and learning
        //     how to be kinder to ourselves – this too often takes place in counselling. My aim is to support you in understanding how your experiences shaped you into who you are today
        //     By sharing our thoughts and feelings with a counsellor, we can begin to observe ourselves through someone else’s lense – a lense much clearer than ours, non-judgemental, open to change and healing. 
        //   </p>
        //   <p className="para italic">
        //     *You may notice that ‘therapy/therapist’ and ‘counselling/counsellor’ are used interchangeably throughout this website. This is because Counselling is a form of Therapy.
        //     For further information, you may wish to have a look at the following sources: <HyperRef link={"https://www.counselling-directory.org.uk/what-is-counselling.html#whatiscounselling"} value={'Counselling Directory'}/>.
        //   </p>
        // </>
      )
    },
    {
      header: "What type of counselling do you offer?",
      content: (
        'content'
        // <>
        //   <p className="para">
        //     In my practice, I integrate elements from various therapeutic approaches I became familiar with over the years. I do this, to tailor the sessions to my clients’ needs.
        //     At times, a listening ear can be just what we need to overcome the difficulties we face, to share our burden with someone who will not judge us. When this is not enough,
        //     we may wish to be challenged in a gentle manner, to aid our self development.
        //   </p>
        //   <p className="para">
        //     I use an <text className="underline">Integrative Approach in Counselling</text> by drawing on my training in various therapeutical approaches such as&nbsp;
        //     <HyperRef link={'https://www.counselling-directory.org.uk/person-centred-therapy.html'} value={'Person-Centred Therapy'}/> (also known as Client-Centred),&nbsp;
        //     <HyperRef link={'https://www.counselling-directory.org.uk/solution-focused-brief-therapy.html'} value={'Solution Focused Therapy'}/>,&nbsp;
        //     <HyperRef link={'https://www.counselling-directory.org.uk/cognitive-behavioural-therapy.html#whattoexpectfromcbt'} value={'Cognitive Behavioural Therapy (CBT)'}/>,&nbsp;
        //     <HyperRef link={'https://www.counselling-directory.org.uk/dialectical-behavioural-therapy.html'} value={'Dialectical Behavioural Therapy (DBT)'}/> &#38;&nbsp;
        //     <HyperRef link={'https://www.counselling-directory.org.uk/mindfulness.html'} value={'Mindfulness'}/>.&nbsp;
        //     <i>(By clicking on each of these individual types of therapies, you will be redirected to their definitions on the Counselling Directory.)</i>
        //   </p>
        //   <p className="para">
        //     I often bring elements of psychoeducation into my practice with clients- this process aims to help our understanding of all those bits of you that <strong>make you who you are</strong>! I believe
        //     that this is a key element in learning how to manage our feelings, thoughts, so that we create a calmer and more enjoyable experience for ourselves. The counselling sessions are
        //     guided by what you bring to therapy and we will work together to find out what the best approach is for you, depending on the things you are struggling with right now. 
        //   </p>
        //   <p className="para">
        //     For more information on my professional background and experience, please feel free to <HyperRef link={'/contact'} value={'contact me'}/>, and book an <text className="underline">initial free consultation</text>.
        //     I am always happy to share how these shaped my counselling approach today. 
        //   </p>
        // </>
      )
    },
    {
      header: "How will I know if this is for me?",
      content: (
        'content'
        // <>
        //   <p className="para">
        //     The type of support suitable for you depends on what <text className="font-semibold">brings you to counselling</text>. You may wish to choose to focus on a particular issue or concern you really wish to work on.
        //     This allows your therapist to tailor the therapy process to your needs. However, sometimes we could feel completely lost. You might feel that you’re not even sure where to begin. Perhaps you are longing for a change and don’t
        //     know how to go about it. My aim is to find all these answers with you, (To enable you to look back to where you began this journey, and think ‘I’ve come so far!’.)
        //   </p>
        // </>
      )
    },
    {
      header: "How many sessions do I need?",
      content: (
        'content'
      )
    },
    {
      header: "What if I need to speak to someone urgently?",
      content: (
        'content'
      )
    },
    {
      header: "Is this confidential?",
      content: (
        'content'
      )
    },
    {
      header: "What is your availability?",
      content: (
        <p className="para">Counselling Sessions can be booked between 9am – 9pm on Thursdays, Fridays, and Saturdays. </p>
      )
    },
  ]
  return (
    <div id="accordionExample">
      {
        items.map((item, idx) => <AccordionItem key={idx} title={item.header} content={item.content}/>)
      }
    </div>
  )
}

export default function FAQs() {
  return <Accordion />
}