import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Slide photos
import Slide1 from "@/assets/carousel/slide1.png";
import Slide2 from "@/assets/carousel/slide2.png";
import Slide3 from "@/assets/carousel/slide3.png";
import Slide4 from "@/assets/carousel/slide4.png";
import Slide5 from "@/assets/carousel/slide5.png";
import Wave from "@/assets/svg/wave.svg";

// Slides content
const slides = [
  {
    id: 1,
    title: "Project Transitional Justice",
    subtitle:
      "Interactive Human Rights Film Screenings and Youth Campaign Building for Transitional Justice",
    image: Slide1,
    link: "/programs/transitional-justice",
  },
  {
    id: 2,
    title: "Harong Queens",
    subtitle:
      "Harong Queens is a bold and colorful initiative under TST that uses drag as a form of protest, education, and celebration of identity.",
    image: Slide2,
    link: "/programs/harong-queens",
  },
  {
    id: 3,
    title: "Karapatan ko Obligasyon ko",
    subtitle:
      "A workshop that brings theater, music, and movement into the heart of communities. Learn. Reflect. Act.",
    image: Slide3,
    link: "/programs/tita-hr",
  },
  {
    id: 4,
    title: "Miyerkulet",
    subtitle:
      "A regular cultural event which HRPEC has mounted over two hundred times, is a safe space for the arts and human rights discourse.",
    image: Slide4,
    link: "/programs/miyerkulet",
  },
  {
    id: 5,
    title: "Makatao, Maka-Tayo Campaign",
    subtitle:
      "Eighteen civil society organizations convened to collectively draft a 12-point human rights legislative agenda, which will serve as a basis for candidates to uphold the rights of the Filipino people.",
    image: Slide5,
    link: "/programs/makatao-makatayo",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Auto-slide every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  // Update slide width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setSlideWidth(carouselRef.current.offsetWidth);
      }
    };

    updateWidth(); // Initial set
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  

  return (
    <div className="relative z-10 flex flex-col justify-center h-full max-md:p-1 bg-ice-500">

      <section className="relative w-full h-[280px] md:h-[450px] flex justify-center items-center overflow-hidden bg-slate-100">
        <div
          ref={carouselRef}
          className="relative w-full max-w-[1024px] h-[280px] md:h-[450px] overflow-hidden"
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out w-full h-full"
            style={{ transform: `translateX(-${current * slideWidth}px)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 flex items-center justify-start relative text-white px-6 sm:px-12 w-full h-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: `${slideWidth}px`,
                }}
              >
                <div className="max-w-md space-y-4 bg-deep-500/40 p-3 sm:p-6 rounded-md">
                  <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xs md:text-md leading-normal md:leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.link} onClick={scrollToTop}>
                    <Button className="cursor-pointer text-white border-white border-2 bg-white/50 hover:bg-white/80 transition duration-300 font-semibold px-6 py-2 text-base">
                      Learn More
                    </Button>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 sm:bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 sm:bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 w-full flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
