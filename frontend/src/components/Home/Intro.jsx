import React from 'react'

const Intro = () => {
  return (
    <div className="relative z-10 bg-blue-50 
      rounded-3xl py-5 sm:py-7 md:py-10 my-7 
      flex flex-col justify-center items-center
      max-md:flex-col
      max-md:px-2
      ">
      <div className="p-0 flex flex-col items-center">
        <h1 className="text-deep-500 text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4 max-md:text-center">
          Empowering Communities. Advancing Human Rights.
        </h1>
        
        <p
          className="text-deep-500 text-sm px-3 sm:px-0 md:text-2xl text-center max-w-xs sm:max-w-xl md:max-w-4xl"
        >
          The Human Rights and People Empowerment Center (HRPEC) is a non-government organization empowering communities to advance the cause of human rights through advocacy, cultural work, and participatory learning.
        </p>
      </div>
    </div>
  )
}

export default Intro