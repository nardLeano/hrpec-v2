import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import GCashQR from "@/assets/donatesvg/gcash-qr.svg";
import MayaQR from "@/assets/donatesvg/maya-qr.svg";
import BDOAccount from "@/assets/donatesvg/bdo-account.svg";
import Wave from "@/assets/svg/wave.svg";

import Pusa from "@/assets/png/donate.png";

const Donate = () => {

    const backgroundRef = useRef(null);
    
        useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const opacity = [1/4] - scrollPosition / window.innerHeight;
    
          if (backgroundRef.current) {
            backgroundRef.current.style.opacity = opacity > 0 ? opacity : 0;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <section className="relative z-10 py-20 px-6 md:px-16 max-w-5xl mx-auto text-center mt-[2rem] text-deep-500">

                <div class="fixed inset-0 w-full h-screen z-0">
                  <img
                    ref={backgroundRef}
                    src={Wave}
                    alt="Background Wave"
                    className="h-full w-full object-cover transition-opacity duration-50 -translate-y-96 sm:-translate-y-86 md:-translate-y-86 lg:-translate-y-105 opacity-25"
                  />
                </div>
      

                {/* Optional Image Section */}
                <div className="relative w-full rounded-lg overflow-clip">
                  <img
                    src={Pusa}
                    alt="Cute cat"
                    className="w-full h-[7rem] sm:h-[10rem] shadow-md object-cover "
                  />

                  {/* Breadcrumbs */}
                    <div className="absolute z-20 top-1 breadcrumbs flex items-end justify-start text-sm text-white ml-5 font-semibold">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a>Donate</a></li>
                      </ul>
                    </div> 
        
                  {/* Inimage Text */}
                  <div className="absolute inset-0 bg-black/40 flex items-end justify-start">
                    <div className="text-white text-start px-4 space-y-4">
                        <h2 className="text-4xl sm:text-6xl font-bold">Support our Work!</h2> 
                    </div> 
                  </div>
                </div>

      <h2 className="block sm:hidden text-3xl font-bold my-4 px-4">Donate for us <br /> to continue our work</h2>
      <h2 className="hidden sm:block text-3xl font-bold my-4 px-4">Donate for us to continue our work</h2>

      <div className="text-md sm:text-lg space-y-4 px-5 sm:px-10 mb-6">
        <p>
          HRPEC is dedicated to advancing the cause of human rights and empowering
          individuals and communities to realize the fullest extent of the freedoms
          which their rights grant them.
        </p>

        <p>
          Our work is made possible by the generous support of people who share our
          vision of a society where rights are realized, protected, and guaranteed
          for all. Your donations go a long way in making our hope a reality.
        </p>

        <p>
          You can send your support through the following:
        </p>        
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-lg p-4 shadow-sm bg-sky-500/10">
          <img src={GCashQR} alt="GCash QR" className="mx-auto max-h-56 object-contain" />
          <p className="mt-4 font-semibold">GCash</p>
        </div>
        <div className="rounded-lg p-4 shadow-sm bg-sky-500/10">
          <img src={MayaQR} alt="Maya QR" className="mx-auto max-h-56 object-contain" />
          <p className="mt-4 font-semibold">PayMaya</p>
        </div>
        <div className="rounded-lg p-4 shadow-sm bg-sky-500/10">
          <img src={BDOAccount} alt="BDO Account Details" className="mx-auto max-h-56 object-contain" />
          <p className="mt-4 font-semibold">Bank Transfer</p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
