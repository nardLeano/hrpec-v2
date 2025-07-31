import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import WhoImage from "@/assets/who.png";
import Wave from "@/assets/svg/wave.svg";

const Who = () => {
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
    <section className="relative z-10 w-full pt-20 px-6 md:px-16 mt-[2rem]">

          <div className="fixed inset-0 w-full h-screen z-0">
            <img
              ref={backgroundRef}
              src={Wave}
              alt="Background Wave"
              className="h-full w-full object-cover transition-opacity duration-50 -translate-y-80 sm:-translate-y-60 opacity-25"
            />
          </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-5 items-center">

        {/* Optional Image Section */}
        <div className="relative w-full rounded-lg overflow-clip">
          <img
            src={WhoImage}
            alt="HRPEC Team or Campaign"
            className="w-full h-auto shadow-md object-cover "
            style={{ maxHeight: "420px" }}
          />

          {/* Breadcrumbs */}
            <div className="absolute z-20 top-1 breadcrumbs flex items-end justify-start text-sm text-white ml-5 font-semibold">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a>About</a></li>
              </ul>
            </div>

          {/* Inimage Text */}
          <div className="absolute inset-0 bg-black/40 flex items-end justify-start">
            <div className="text-white text-end px-4 space-y-4">
                <h2 className="text-4xl sm:text-6xl font-bold">Who We Are</h2> 
            </div> 
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full text-deep-500 max-w-3xl">

          <div className="text-md md:text-lg leading-relaxed space-y-4">
            <p>
              The Human Rights and People Empowerment Center (HRPEC) is a non-government organization committed to advancing the cause of human rights through community empowerment.
            </p>

            <p>
              Founded in 2017, HRPEC emerged in response to the growing threats faced by human rights defenders in the Philippines. What began as a small initiative by grassroots advocates has grown into a multi-sectoral platform for action, learning, and cultural resistance.
            </p>

            <p>
              At our core, we believe that sustainable change begins with informed, engaged communities. That’s why our work is rooted in two interconnected approaches:
            </p>

            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Advocacy work</strong> through campaigns, civic actions, and coalition building
              </li>
              <li>
                <strong>Participatory learning</strong> through workshops, creative spaces, and open dialogue
              </li>
            </ul>

            <p>
              We serve as a convergence center for diverse individuals and organizations—activists, artists, educators, youth, and grassroots communities—working together to build a society that is just, inclusive, and human rights-centered.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Who;
