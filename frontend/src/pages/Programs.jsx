import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import ProgramContent from '@/components/ProgramContent';
import MiyerkuletNow from "@/components/Home/MiyerkuletNow";
import PtjEducGate from "@/components/PtjEducGate";

// IMAGES FOR BANNERS
import transitionalJusticeImg from '@/program-contents/transitional-justice.png';
import harongQueensImg from '@/program-contents/harong-queens.png';
import karapatanKoImg from '@/program-contents/tita-hr.png';
import miyerkuletImg from '@/program-contents/miyerkulet.png';
import makataoImg from '@/program-contents/makatao-makatayo.png';

// IMAGE MAP (based on Markdown filename)
const images = {
  'transitional-justice': transitionalJusticeImg,
  'harong-queens': harongQueensImg,
  'tita-hr': karapatanKoImg,
  'miyerkulet': miyerkuletImg,
  'makatao-makatayo': makataoImg,
};

const Programs = () => {

  const { id } = useParams();

  const imageSrc = images[id];

  const [meta, setMeta] = useState({
  id: "",
  slug: "",
  title: "",
});

  const handleContentLoad = ({ id, slug, title }) => {
  setMeta({ id, slug, title });
};

  return (
    <section className="w-full relative max-w-5xl lg:px-0 center mx-auto pt-[6rem]">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-5 items-center">
            {/* Image based on id */}
            <div className="relative w-full h-[300px] sm:h-[400px] overflow-clip">
                <img
                src={imageSrc}
                alt={`Banner for ${id}`}
                className="object-cover w-full h-full"
                />
            </div>

            {/* Title based on id */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end">
                <div className="text-white text-start px-4 mb-2">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
                        {meta.title || "Title Loading..."}
                    </h2>                    
                </div>
                {/* Breadcrumbs */}
                <div className="top-1 breadcrumbs flex flex-wrap items-start text-start text-sm text-white ml-5 font-semibold drop-shadow-lg mb-2">
                    <ul className="flex flex-wrap gap-1 text-start">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="">Programs</Link></li>
                        <li><Link to="">{meta.title || "Title Loading..."}</Link></li>
                    </ul>
                </div>               
            </div>
        </div>

        <div className="w-full text-deep-500 max-w-5xl pt-5 px-6 md:px-16 mb-10">
            {/* content*/}
            <div className="text-md md:text-lg leading-relaxed space-y-2">
                <h2 className="font-semibold text-xl">{meta.title || "Title Loading..."}</h2>
                <ProgramContent id={id} onTitleLoad={handleContentLoad} />                
            </div>                
        </div>

        { id === "miyerkulet" && (
        <div className="mb-10"> 
            <MiyerkuletNow />
        </div>
        )}

        { id === "transitional-justice" && (
        <div className="mb-10"> 
            <PtjEducGate />
        </div>
        )}


    </section>
  )
}

export default Programs