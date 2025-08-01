import React from 'react'
import PtjFlower from "@/assets/PtjFlower.jpg";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const PtjEducGate = () => {
  return (
    <section className="relative w-full h-[200px] md:h-[400px] flex justify-center items-center overflow-hidden bg-slate-100 ">
          {/* Background Image */}
          <img
            src={PtjFlower}
            alt="Learn More about PTJ"
            className="relative w-full max-w-[1024px] max-h-[400px] h-full md:h-full object-cover"
          />
    
          {/* Overlay and Content */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-center px-4 sm:space-y-2 md:space-y-4">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold px-10">Further Readings on Transitional Justice</h1>
              <p className="text-sm sm:text-lg md:text-xl max-w-xl md:max-w-3xl mx-auto px-10">
                Read Educational articles in relation with Project Transitional Justice.
              </p>
              <Link to="/programs/transitional-justice/ptj-educ">
                <Button className="text-white border-white border-2 bg-white/50 hover:bg-white/0 transition duration-300 font-semibold px-6 py-2 text-base mt-3 cursor-pointer">
                    Learn more
                </Button>
              </Link>
            </div>
          </div>
        </section>
  )
}

export default PtjEducGate