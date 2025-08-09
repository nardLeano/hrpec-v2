import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";

// Static banner image
import bannerPTJ from "@/ptj-content/ptj-read.png";
import whatsJusticeImg from "@/ptj-content/whats-justice.png";
import whatsTJImg from "@/ptj-content/whats-tj.png"

// Thumbnails per post (optional)
const thumbnails = {
  'whats-justice': whatsJusticeImg,
  'whats-tj':whatsTJImg,
};

const PtjEduc = () => {
  const { id } = useParams();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadMarkdownFiles = async () => {
      const files = import.meta.glob("@/ptj-content/*.md", { as: "raw" });

      const entries = Object.entries(files);

      const loaded = await Promise.all(
        entries.map(async ([path, loader]) => {
          const raw = await loader();
          const { data } = matter(raw);

          return {
            id: data.id,
            slug: data.slug,
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags || [],
          };
        })
      );

      setCards(loaded);
    };

    loadMarkdownFiles();
  }, []);

  return (
    <section className="w-full relative max-w-5xl lg:px-0 center mx-auto pt-[6rem]">
      {/* BANNER */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-5 items-center">
        <div className="relative w-full h-[200px] sm:h-[200px] overflow-clip">
          <img
            src={bannerPTJ}
            alt={`Banner for ${id}`}
            className="object-cover object-bottom w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end">
          <div className="text-white text-start px-4 mb-2">
            <h2 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
              PTJ Educationals
            </h2>
          </div>
          <div className="top-1 breadcrumbs flex flex-wrap items-start text-start text-sm text-white ml-5 font-semibold drop-shadow-lg mb-2">
            <ul className="flex flex-wrap gap-1 text-start">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/programs/transitional-justice">Project Transitional Justice</Link></li>
              <li><Link to="/programs/transitional-justice/ptj-educ">PTJ Educational</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* RESPONSIVE GRID */}
      <div className="p-2 w-full bg-smoke mt-5 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
                <Link
                to={`/programs/transitional-justice/ptj-educ/${card.id}`}
                key={card.id}
                className="bg-[#3C674C]/60 rounded-2xl shadow-md p-2 flex flex-col items-center text-center transition duration-200 hover:scale-[1.02]"
                >
                <div className="w-full aspect-[4/5] bg-gray-300 rounded-lg mb-2 overflow-hidden">
                    <img
                    src={thumbnails[card.id] || "/placeholder.jpg"}
                    alt={`${card.title} thumbnail`}
                    className="object-cover w-full h-full"
                    />
                </div>
                <h3 className="text-xl font-bold text-[#3C674C]">{card.title}</h3>
                <p className="text-sm text-smoke-500 italic">{card.description}</p>
                <p className="text-sm text-smoke-500">{card.date}</p>
                <div className="flex flex-wrap justify-center mt-2 gap-1">
                    {card.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-xs bg-[#D9A441] text-[#3C674C] px-3 py-0.5 rounded-lg"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </Link>
            ))}
            </div>
      </div>
    </section>
  );
};

export default PtjEduc;
