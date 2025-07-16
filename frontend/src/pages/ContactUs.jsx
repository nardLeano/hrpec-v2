import React from "react";
import EmailForm from "@/components/ContactUs/EmailForm";

const ContactUs = () => {
  return (
    <section className="w-full bg-white py-20  md:px-10 mt-[4rem]">
      <div className="max-w-4xl mx-auto text-deep-500 space-y-6 px-10">
        <h1 className="text-5xl font-bold text-center">Contact Us</h1>

        <div className="text-lg space-y-4 px-10">
          <p><strong>Kamusta!</strong></p>
          <p>
            We believe that every human being has the right to express themselves. In advancing our cause for human rights, it is necessary that we listen to each other.
          </p>
          <p>
            If you have any questions, concerns, or ideas to share with us, please don’t hesitate to reach out to us through the form below.
          </p>
          <p className="italic">Love, <strong>HRPEC</strong></p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-10 text-deep-500 shadow-sm">
            <EmailForm />            
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
