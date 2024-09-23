import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

interface Highlight {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  views: number;
}

const highlights: Highlight[] = [
  {
    id: 1,
    image: "/images/tree.png",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2023",
    category: "Economic",
    views: 19,
  },
  {
    id: 2,
    image: "/images/Astro.png",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2025",
    category: "Economic",
    views: 19,
  },
  {
    id: 3,
    image: "/images/building.png",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2025",
    category: "Economic",
    views: 19,
  },
  {
    id: 4,
    image: "/images/buh.png",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2025",
    category: "Economic",
    views: 19,
  },
];

const HighlightsCard: React.FC<{ highlight: Highlight }> = ({ highlight }) => {
  return (
    <div className="border w-72 h-96 max-md:w-[302px] max-md:h-[96] p-5 rounded-lg bg-white cursor-pointer hover:shadow-2xl">
      <img src={highlight.image} alt={highlight.title} className="w-full" />
      <h1 className="text-[#0B3558] text-base mt-4 font-medium">
        {highlight.title}
      </h1>
      <p className="text-xs font-light text-[#476788] mt-3">
        {highlight.description}
      </p>
      <hr className="border-gray-300 w-full my-3" />
      <p className="text-light text-[10px] text-[#5B5B5B]">{highlight.date}</p>
      <div className="flex justify-between">
        <h2 className="text-xs font-medium text-[#2986FE] mt-1">
          {highlight.category}
        </h2>
        <div className="flex gap-2 items-center">
          <div className="text-xs text-[#5B5B5B]">
            <MdRemoveRedEye />
          </div>
          <p className="text-xs font-medium text-[#5B5B5B]">
            {highlight.views}
          </p>
        </div>
      </div>
    </div>
  );
};

const HighlightsList = () => {
  return (
    <div className="flex w-max mt-3 gap-8 py-0 max-lg:ml-[40px] mx-auto overflow-x-scroll mb-28 max-md:mb-0 ">
      {highlights.map((highlight) => (
        <HighlightsCard key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
};

export default HighlightsList;
