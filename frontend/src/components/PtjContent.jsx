import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import remarkBreaks from 'remark-breaks';
import rehypeRaw from "rehype-raw";

// IMAGES FOR BANNERS
import whatsJusticeImg from '@/ptj-content/ptj-read.png';
// Add more images here as needed

const imageMap = {
  'whats-justice': whatsJusticeImg,
  // Add more { id: image } mappings here
};

const PtjContent = ({ id, onMetaLoad }) => {
  const [content, setContent] = useState("Loading...");

    useEffect(() => {
      const fetchMarkdown = async () => {
        try {
          const file = await import(`@/ptj-content/${id}.md?raw`);
          const raw = file.default;
          const { data, content } = matter(raw);

          // call only once per id change
          onMetaLoad?.({
            id: data.id,
            slug: data.slug,
            title: data.title,
            date: data.date,
            tags: data.tags || [],
          });

          setContent(content);
        } catch (error) {
          setContent("Error loading content.");
          console.error("Failed to load markdown:", error);
        }
      };

      fetchMarkdown();
    }, [id]);

    const components = {
        img: ({ src, alt }) => {
        const resolvedSrc = imageMap[src] || src;
        return (
            <img
            src={resolvedSrc}
            alt={alt}
            className="rounded-xl my-6 max-w-full mx-auto"
            />
        );
        },

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 text-blue-600 hover:text-blue-400 underline cursor-pointer pointer-events-auto"
            // onClick={(e) => {
            //   alert("You clicked the link!");
            // }}
          >
            {children}
          </a>  
        ),
    };

  return (
    <div className="relative z-50 prose prose-lg leading-relaxed max-w-none break-words pointer-events-auto">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm, remarkBreaks]} 
        rehypePlugins={[rehypeRaw]} 
        components={components}
        >
          {content}
      </ReactMarkdown>
    </div>
  );
};

export default React.memo(PtjContent);
