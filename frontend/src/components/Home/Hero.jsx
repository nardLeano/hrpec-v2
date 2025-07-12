import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

//Slide photos
import Slide1 from "@/assets/carousel/slide1.png";
import Slide2 from "@/assets/carousel/slide2.png";
import Slide3 from "@/assets/carousel/slide3.png";
import Slide4 from "@/assets/carousel/slide4.png";

//slides content
const slides = [
  {
    id: 1,
    title: "Project Transitional Justice",
    subtitle: "Interactive Human Rights Film Screenings and Youth Campaign Building for Transitional Justice",
    image: Slide1,
  },
  {
    id: 2,
    title: "Harong Queens",
    subtitle: "Harong Queens is a bold and colorful initiative under TST that uses drag as a form of protest, education, and celebration of identity.",
    image: Slide2,
  },
  {
    id: 3,
    title: "Karapatan ko Obligasyon ko",
    subtitle: "A workshop that brings theater, music, and movement into the heart of communities. Learn. Reflect. Act.",
    image: Slide3,
  },
  {
    id: 4,
    title: "Miyerkulet",
    subtitle: "A regular cultural event which HRPEC has mounted over two hundred times, is a safe space for the arts and human rights discourse.",
    image: Slide4,
  },
];

const Hero = () => {

    //Carousel Spin
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);


  return (
    <div className="relative z-10 flex flex-col justify-center h-full mt-[7rem] max-md:p-1 bg-ice-500">
    <section className="relative w-full h-[450px] flex justify-center items-center overflow-hidden bg-slate-100">
      <div className="relative w-[1024px] h-[450px] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 1024}px)` }}
      >
        {slides.map((slide) => (
        <div
            key={slide.id}
            className="flex-shrink-0 flex items-center justify-start relative text-white px-12"
            style={{
            width: "1024px",
            height: "450px",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        >
            <div className="max-w-md space-y-4 bg-deep-500/40 p-6 rounded-md">
            <h1 className="text-4xl font-bold drop-shadow-lg">{slide.title}</h1>
            <p className="text-md leading-relaxed drop-shadow-md">{slide.subtitle}</p>
            <Button className="cursor-pointer text-white border-white border-2 bg-white/50 hover:bg-white/80 transition duration-300 font-semibold px-6 py-2 text-base">
                Learn More
            </Button>
            </div>
        </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
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
          />
        ))}
      </div>
    </section>
    </div>
  )
}

export default Hero