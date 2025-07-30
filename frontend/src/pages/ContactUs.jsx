import React from "react";
import EmailForm from "@/components/ContactUs/EmailForm";
import Contact from "@/assets/png/contact.png";

const ContactUs = () => {
  return (
    <section className="w-full bg-white py-20  md:px-10 mt-[2rem]">
      <div className="max-w-4xl mx-auto text-deep-500 space-y-6 px-4">
                {/* Optional Image Section */}
                <div className="relative w-full ">
                  <img
                    src={Contact}
                    alt="HRPEC pull up banner"
                    className="w-full h-[5rem] sm:h-[10rem] rounded-lg shadow-md object-cover "
                  />
        
                  {/* Inimage Text */}
                  <div className="absolute inset-0 bg-black/40 flex items-end justify-start">
                    <div className="text-white text-end px-4 space-y-4">
                        <h2 className="text-4xl sm:text-6xl font-bold">Contact Us</h2> 
                    </div> 
                  </div>
                </div>

        <div className="text-md sm:text-lg space-y-4 px-5 sm:px-10">
          <p><strong>Kamusta!</strong></p>
          <p>
            We believe that every human being has the right to express themselves. In advancing our cause for human rights, it is necessary that we listen to each other.
          </p>
          <p>
            If you have any questions, concerns, or ideas to share with us, please don’t hesitate to reach out to us through the form below.
          </p>
          <p className="italic">Love, <strong>HRPEC</strong></p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-5 sm:p-10 text-deep-500 shadow-sm">
            <EmailForm />            
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
