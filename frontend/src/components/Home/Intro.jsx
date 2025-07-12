import React from 'react'

const Intro = () => {
  return (
    <div className="relative z-10 bg-blue-50 
      rounded-3xl py-7 my-7 
      flex flex-col justify-around items-center
      max-md:flex-col
      max-md:px-2
      ">
      <div className="p-0">
        <h1 className="text-deep-500 text-center text-3xl font-bold mb-4 max-md:text-center">
          Empowering Communities. Advancing Human Rights.
        </h1>
        
        <p
          className="text-deep-500 text-2xl text-center max-w-4xl"
        >
          The Human Rights and People Empowerment Center (HRPEC) is a non-government organization empowering communities to advance the cause of human rights through advocacy, cultural work, and participatory learning.
        </p>
      </div>
    </div>
  )
}

export default Intro