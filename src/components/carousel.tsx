

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Correct import statement
import counsellingRoom1 from '../public/assets/img/counsellingRoom1.jpg';
import counsellingRoom2 from '../public/assets/img/counsellingRoom2.jpg';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'slide1',
      img: counsellingRoom1,
      caption: 'Counselling Room Picture 1',
    },
    {
      id: 'slide2',
      img: counsellingRoom2,
      caption: 'Counselling Room Picture 2',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slide every 4000 milliseconds (4 seconds)
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]); // Dependency on currentSlide to reset the interval when slide changes

  function selectSlide(index: number): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`carousel-item relative w-full flex justify-center items-center ${index === currentSlide ? 'block' : 'hidden'}`}>
          <Image className='rounded-xl' src={slide.img} alt={slide.caption} width={700} height={500} />
          {/* Buttons */}
          <div className="absolute inset-x-0 bottom-0 flex justify-between sm:justify-between sm:transform sm:-translate-y-3/4 sm:left-20 sm:right-20 sm:top-3/4 ">
            <button 
              className="btn btn-circle bg-transparent text-primaryDark text-bold border-primaryDark" 
              type="button" 
              onClick={prevSlide} 
              aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              className="btn btn-circle bg-transparent text-primaryDark text-bold border-primaryDark"
              onClick={nextSlide} 
              aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Carousel;






// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 'slide1',
//       image: 'counsellingRoom1',
//       caption: 'Counselling Room Picture 1',
//     },
//     {
//       id: 'slide2',
//       image: 'counsellingRoom2',
//       caption: 'Counselling Room Picture 2',
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
//   }
// return (
//   <div className="carousel w-full">
//     {slides.map((slide, index) => (
//       <div key={slide.id} className={`carousel-item relative w-full flex justify-center items-center ${index === currentSlide ? 'block' : 'hidden'}`}>
//         <Image src={slide.img} alt={slide.caption} width={800} height={600} />
//         <div className="absolute bottom-0 left-0 flex justify-center w-full text-white">
//         </div>
//         {/* Buttons */}
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2 ">
//           <button 
//             className="btn btn-circle" 
//             type="button" 
//             onClick={prevSlide} 
//             aria-label="Previous">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//             </svg>
//           </button>
//           <button 
//             className="btn btn-circle"
//             onClick={nextSlide} 
//             aria-label="Next">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     ))}

//   </div>
// );
// };

// export default Carousel;




