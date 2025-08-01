import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

// Vite loads all markdown files as raw strings
const files = import.meta.glob('/src/program-contents/*.md', {
  query: '?raw',
  import: 'default'
});

// Import image files directly
import transitionalJusticeImg from '@/program-contents/transitional-justice.png';
import harongQueensImg from '@/program-contents/harong-queens.png';
import karapatanKoImg from '@/program-contents/tita-hr.png';
import miyerkuletImg from '@/program-contents/miyerkulet.png';
import makataoImg from '@/program-contents/makatao-makatayo.png';

// Map filenames (used in markdown) to image imports
const imageMap = {
  'transitional-justice.png': transitionalJusticeImg,
  'harong-queens.png': harongQueensImg,
  'tita-hr.png': karapatanKoImg,
  'miyerkulet.png': miyerkuletImg,
  'makatao-makatayo.png': makataoImg,
};

const ProgramContent = ({ id, onTitleLoad = () => {} }) => {
    
  const [content, setContent] = useState("");

  useEffect(() => {
    const filePath = `/src/program-contents/${id}.md`;
    const load = files[filePath];

    if (load) {
      load().then((raw) => {
        try {
          const { content: body, data } = matter(raw); // parses frontmatter!
          
          // Send meta (id, slug, title)
          onTitleLoad({
            id: data.id,
            slug: data.slug,
            title: data.title,
          });

          setContent(body);
        } catch (error) {
          console.error("Error parsing content file:", error);
          setContent("## Error\nInvalid content format.");
        }
      });
    } else {
      setContent("## 404\nPost not found.");
    }
  }, [id, onTitleLoad]);

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
    };

  return (
    <div>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}

export default ProgramContent