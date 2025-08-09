import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

// Banner
import bannerImg from "@/ptj-content/ptj-read.png";

// Thumbnails
import transitionalJusticeImg from '@/program-contents/transitional-justice.png';
import harongQueensImg from '@/program-contents/harong-queens.png';
import karapatanKoImg from '@/program-contents/tita-hr.png';
import miyerkuletImg from '@/program-contents/miyerkulet.png';
import makataoImg from '@/program-contents/makatao-makatayo.png';

const imageMap = {
  'transitional-justice': transitionalJusticeImg,
  'harong-queens': harongQueensImg,
  'tita-hr': karapatanKoImg,
  'miyerkulet': miyerkuletImg,
  'makatao-makatayo': makataoImg,
};

const OurWork = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadMarkdownFiles = async () => {
      const files = import.meta.glob("/src/program-contents/*.md", {
        query: "?raw",
        import: "default"
      });

      const entries = Object.entries(files);

      const loaded = await Promise.all(
        entries.map(async ([path, loader]) => {
          const raw = await loader();
          const { data } = matter(raw);

          return {
            id: data.id,
            slug: data.slug,
            title: data.title,
            subtitle: data.subtitle,
            thumbnail: imageMap[data.id] || "/placeholder.jpg",
            link: `/programs/${data.id}`,
          };
        })
      );

      setCards(loaded);
    };

    loadMarkdownFiles();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="w-full relative max-w-5xl lg:px-0 center mx-auto pt-[6rem]">
      {/* BANNER */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-5 items-center">
        <div className="relative w-full h-[200px] sm:h-[200px] overflow-clip">
          <img
            src={bannerImg}
            alt="Our Work Banner"
            className="object-cover object-bottom w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end">
          <div className="text-white text-start px-4 mb-2">
            <h2 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
              Our Work
            </h2>
          </div>
          <div className="top-1 breadcrumbs flex flex-wrap items-start text-start text-sm text-white ml-5 font-semibold drop-shadow-lg mb-2">
            <ul className="flex flex-wrap gap-1 text-start">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/programs">Programs</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* CARD GRID */}
      <div className="p-4 w-full bg-smoke mt-5 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
          {cards.map((slide) => (
            <div
              key={slide.id}
              className="max-w-md space-y-4 bg-deep-500/40 p-3 sm:p-6 rounded-md flex flex-col justify-between"
            >
            <div className="space-y-2 mb-7">
              <div>
                <img
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-24 sm:h-48 object-cover rounded-md"
                />
              </div>
            
            
              <h1 className="text-xl md:text-2xl font-bold drop-shadow-lg">
                {slide.title}
              </h1>

              <p className="text-[10px] md:text-md leading-normal md:leading-relaxed drop-shadow-md">
                {slide.subtitle}
              </p>                
            </div>

            <div className="justify-end flex">
              <Link to={slide.link} onClick={scrollToTop}>
                <button className="cursor-pointer text-white border-white border-2 bg-white/50 hover:bg-white/80 transition duration-300 font-semibold px-6 py-2 text-base">
                  Learn More
                </button>
              </Link>                
            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
