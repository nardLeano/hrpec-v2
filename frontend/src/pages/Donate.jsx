import React from "react";
import GCashQR from "@/assets/donatesvg/gcash-qr.svg";
import MayaQR from "@/assets/donatesvg/maya-qr.svg";
import BDOAccount from "@/assets/donatesvg/bdo-account.svg";

const Donate = () => {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Support Our Work by Donating</h2>

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
        Donate to us through the link below.
      </p>

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
