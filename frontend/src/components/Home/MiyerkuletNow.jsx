import React from 'react'
import FreedomX from "@/assets/FreedomX.jpg";
import { Button } from "@/components/ui/button";

const MiyerkuletNow = () => {
  return (
    <section className="relative w-full h-[200px] md:h-full flex justify-center items-center overflow-hidden bg-slate-100 ">
      {/* Background Image */}
      <img
        src={FreedomX}
        alt="What's new in MiyerKULET"
        className="relative w-full max-w-[1024px] h-[200px] md:h-full overflow-hidden"
      />

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-white text-center px-4 sm:space-y-2 md:space-y-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold">What's new in MiyerKULET</h1>
          <p className="text-sm sm:text-lg md:text-xl max-w-xl md:max-w-3xl mx-auto">
            Discover the latest events, performances, and cultural movements from our vibrant community.
          </p>
          <Button className="text-white border-white border-2 bg-white/50 hover:bg-white/0 transition duration-300 font-semibold px-6 py-2 text-base mt-3">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiyerkuletNow;