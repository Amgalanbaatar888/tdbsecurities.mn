"use client";

import HighlightsCard from "./HighlightsCards";
import TitleSection from "./TitleSection";

export default function Highlights() {
  const next = () => {
    console.log("Next");
  };
  return (
    <>
      <TitleSection
        mostRead="Read more"
        latest=""
        title="Oнцлох мэдээ"
        onClick={next}
      />
      <div className="bg-[#F5F5F7] max-md:bg-white overflow-x-auto scrollbar-hide">
        <HighlightsCard />
      </div>
    </>
  );
}
