import React from "react";
import GCashQR from "@/assets/donatesvg/gcash-qr.svg";
import MayaQR from "@/assets/donatesvg/maya-qr.svg";
import BDOAccount from "@/assets/donatesvg/bdo-account.svg";

import Pusa from "@/assets/png/donate.png";

const Donate = () => {
  return (
    <section className="px-4 py-20 md:px-10 max-w-5xl mx-auto text-center mt-[2rem] text-deep-500">

                {/* Optional Image Section */}
                <div className="relative w-full ">
                  <img
                    src={Pusa}
                    alt="Cute cat"
                    className="w-full h-[5rem] sm:h-[10rem] rounded-lg shadow-md object-cover "
                  />
        
                  {/* Inimage Text */}
                  <div className="absolute inset-0 bg-black/40 flex items-end justify-start">
                    <div className="text-white text-end px-4 space-y-4">
                        <h2 className="text-4xl sm:text-6xl font-bold">Support our Work!</h2> 
                    </div> 
                  </div>
                </div>

      <h2 className="block sm:hidden text-3xl font-bold my-4 px-4">Donate for us <br /> to continue our work</h2>
      <h2 className="hidden sm:block text-3xl font-bold my-4 px-4">Donate for us to continue our work</h2>

      <div className="text-md sm:text-lg space-y-4 px-5 sm:px-10">
      <p className="text-lg text-gray-700 mb-6">
        HRPEC is dedicated to advancing the cause of human rights and empowering
        individuals and communities to realize the fullest extent of the freedoms
        which their rights grant them.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Our work is made possible by the generous support of people who share our
        vision of a society where rights are realized, protected, and guaranteed
        for all. Your donations go a long way in making our hope a reality.
      </p>

      <p className="text-lg font-medium mb-6">
        You can send your support through the following:
      </p>        
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <img src={GCashQR} alt="GCash QR" className="mx-auto max-h-56 object-contain" />
          <p className="mt-4 font-semibold">GCash</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <img src={MayaQR} alt="Maya QR" className="mx-auto max-h-56 object-contain" />
          <p className="mt-4 font-semibold">PayMaya</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <img src={BDOAccount} alt="BDO Account Details" className="mx-auto max-h-56 object-contain" />
          <p className="mt-4 font-semibold">Bank Transfer</p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
