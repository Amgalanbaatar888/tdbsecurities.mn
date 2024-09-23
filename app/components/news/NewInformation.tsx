"use client";

import { useEffect, useRef, useState } from "react";
import LargeNewsCard from "./LargeNewsCard";
import NewsCard from "./NewsCard";
import TitleSection from "./TitleSection";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  description2?: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Apple Inc Q2 Earnings:",
    description:
      "On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing...",
    description2:
      "On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing...",
    imageUrl: "/images/Apple.png",
  },
  {
    id: 2,
    title: "New York Stock Exchange",
    description:
      "On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing...",
    imageUrl: "/images/NewYork.png",
  },
  {
    id: 3,
    title: "New York Stock Exchange",
    description:
      "On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing...",
    imageUrl: "/images/NewYork.png",
  },
];

export default function NewInformation() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = (direction: "left" | "right"): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const currentScrollPosition = container.scrollLeft;

      const newScrollPosition =
        direction === "right"
          ? Math.min(
              currentScrollPosition + scrollAmount,
              container.scrollWidth - container.clientWidth
            )
          : Math.max(currentScrollPosition - scrollAmount, 0);

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      console.log("Current scroll position:", newScrollPosition);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setIsSticky(container.scrollLeft > 0);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollEvent);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScrollEvent);
      }
    };
  }, []);

  return (
    <>
      <TitleSection
        title="Шинэ мэдээлэл"
        mostRead="Most read"
        latest="Latest"
        onClick={() => handleScroll("right")}
      />
      <div className="bg-[#F5F5F7] max-md:bg-white overflow-x-auto space-x-4 scrollbar-hide">
        <div
          ref={scrollContainerRef}
          className={`flex w-max mt-3 gap-8 py-0 ml-[140px]  max-lg:ml-[40px] ${
            isSticky ? "sticky-class" : ""
          }`}
        >
          <LargeNewsCard
            imageUrl={newsData[0].imageUrl}
            title={newsData[0].title}
            description={newsData[0].description}
            description2={newsData[0].description}
          />
          <div className="max-xl:flex max-xl:gap-7 ">
            {newsData.slice(1).map((news) => (
              <div key={news.id}>
                <NewsCard title={news.title} imageUrl={news.imageUrl} />
              </div>
            ))}
          </div>
          <LargeNewsCard
            imageUrl={newsData[0].imageUrl}
            title={newsData[0].title}
            description={newsData[0].description}
            description2={newsData[0].description}
          />
        </div>
      </div>
    </>
  );
}
