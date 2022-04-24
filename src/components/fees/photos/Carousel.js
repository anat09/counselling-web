import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import StAnnsRoomOne from './stAnnsRoomOne';
import StAnnsExterior from './stAnnsRoomExterior';
import StAnnsRoomTwo from './stAnnsRoomTwo';

const Carousel = () => {
  const [ slideNumber, setSlideNumber ] = useState(0);
  const images = [
    <StAnnsRoomOne />,
    <StAnnsRoomTwo />,
    <StAnnsExterior />,
  ]

  const cycleLeft = () => {
    setSlideNumber(slideNumber === 0 ? images.length - 1 : slideNumber - 1);
  }
  const cycleRight = () => {
    setSlideNumber(slideNumber === images.length - 1 ? 0 : slideNumber + 1);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => cycleRight(),
    onSwipedRight: () => cycleLeft()
  })

  return (
    <div { ...handlers } className="carousel flex w-full overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${slideNumber * 100}%)`}}  
      >
        {
          images.map((image, idx) => {
            return (
              <div key={idx} className="carousel-item inline-flex w-full justify-center align-middle">
                <div className="rounded-xl overflow-hidden">
                  { image }
                </div>
              </div>
            )
          })
        }
      </div> 
      <div className="sm:visible invisible fixed flex justify-between left-5 right-5 top-2/4 -translate-y-32">
        <button className="btn btn-circle bg-secondary border-white" onClick={cycleLeft}>(</button> 
        <button className="btn btn-circle bg-secondary border-white" onClick={cycleRight}>)</button>
      </div>
    </div>
  )
}

export default Carousel;