import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import EmailForm from "@/components/ContactUs/EmailForm";
import Contact from "@/assets/png/contact.png";
import Wave from "@/assets/svg/wave.svg";

const ContactUs = () => {
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
    <section className="relative z-10 w-full bg-smoke-500 py-20 mt-[2rem]">

                <div class="fixed inset-0 w-full h-screen z-0">
                  <img
                    ref={backgroundRef}
                    src={Wave}
                    alt="Background Wave"
                    className="h-full w-full object-cover transition-opacity duration-50 -translate-y-96 sm:-translate-y-80 opacity-25"
                  />
                </div>

      <div className="relative z-10 max-w-5xl mx-auto text-deep-500 space-y-6 px-6 md:px-16 ">
                {/* Optional Image Section */}
                <div className="relative w-full rounded-lg overflow-clip">
                  <img
                    src={Contact}
                    alt="HRPEC pull up banner"
                    className="w-full h-[7rem] sm:h-[10rem] shadow-md object-cover "
                  />

                  {/* Breadcrumbs */}
                    <div className="absolute z-20 top-1 breadcrumbs flex items-end justify-start text-sm text-white ml-5 font-semibold">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a>Contact Us</a></li>
                      </ul>
                    </div>                  
        
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

        <div className="bg-sky-500/10 rounded-3xl p-5 sm:p-10 text-deep-500 shadow-sm">
            <EmailForm />            
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
