import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types';

function AccordionItem({ title, content }) {
  const [active, setActive] = useState(false)
  const [color, setColor] = useState('text-primary')
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-0' : 'transform duration-0 rotate-180')
    setColor(active ? 'text-primary' : 'text-secondary')
  }

  return (
    <div className="flex flex-col font-lato px-1 xl:px-0">
      <button
        className="py-5 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className={`inline-block ${color} font-bold`}>{ title }</p>
        <div className={`${rotate} inline-block`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden duration-300 ease-in-out"
      >
        { content }
      </div>
    <hr/>
    </div>
  )
}

const Accordion = ({ items }) => {
  return (
    <div id="accordionExample" className="pb-4 pl-2">
      {
        items.map((item, idx) => <AccordionItem key={idx} title={item.header} content={item.content}/>)
      }
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Accordion