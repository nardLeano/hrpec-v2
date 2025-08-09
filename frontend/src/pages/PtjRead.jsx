import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";

import PtjContent from "@/components/PtjContent";

// IMAGES FOR BANNERS
import whatsJusticeImg from '@/ptj-content/ptj-read.png';
// Add more images here as needed

const images = {
  'whats-justice': whatsJusticeImg,
  // Add more { id: image } mappings here
};

const PtjRead = () => {
  const { id } = useParams();
  const imageSrc = images[id];

  const [meta, setMeta] = useState({
    id: "",
    slug: "",
    title: "",
    date: "",
    tags: [],
  });

  const handleContentLoad = ({ id, slug, title, date, tags }) => {
    setMeta({ id, slug, title, date, tags });
  };

  return (
    <section className="w-full relative max-w-5xl lg:px-0 center mx-auto pt-[6rem]">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-5 items-center">
        <div className="relative w-full h-[200px] sm:h-[200px] overflow-clip">
          <img
            src={whatsJusticeImg}
            alt={`Banner for ${id}`}
            className="object-cover object-bottom w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end">
          <div className="text-white text-start px-4 mb-2">
            <h2 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
              {meta.title || "Title Loading..."}
            </h2>
          </div>
          <div className="top-1 breadcrumbs flex flex-wrap items-start text-start text-sm text-white ml-5 font-semibold drop-shadow-lg mb-2">
            <ul className="flex flex-wrap gap-1 text-start">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/programs/transitional-justice">Project Transitional Justice</Link></li>
              <li><Link to="/programs/transitional-justice/ptj-educ">PTJ Educational</Link></li>
              <li><Link to="">{meta.title || "Title Loading..."}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full text-deep-500 max-w-5xl pt-5 px-6 md:px-16 mb-10">
        <div className="prose text-md md:text-lg leading-relaxed space-y-2">
          {/* <h2 className="font-semibold text-xl">{meta.title || "Title Loading..."}</h2> */}
          <p className="text-sm md:text-md mb-4">{meta.date || "Title Loading..."}</p>
          <PtjContent id={id} onMetaLoad={handleContentLoad} />
        </div>
      </div>
    </section>
  );
};

export default PtjRead;
