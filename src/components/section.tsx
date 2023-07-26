import React from 'react'

interface SectionProps {
  paras: (string | JSX.Element)[]
}

const Section = ({ paras }: SectionProps) => {
  return (
    <section className="font-lato p-2">
      {paras.map((para, idx) => <div key={idx} className="leading-7 sm:leading-8 py-4 sm:text-lg sm:py-1.5">{para}</div>)}
    </section>
  )
}

export default Section