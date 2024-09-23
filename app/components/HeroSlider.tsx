"use client";

import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Button from "./button/Button";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  caption: string;
}

const slides: Slide[] = [
  { id: 1, image: "/images/Slide1.png", caption: "Slide 1" },
  { id: 2, image: "/images/Slide0.jpg", caption: "Slide 2" },
  { id: 3, image: "/images/Slide2.jpg", caption: "Slide 3" },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              quality={100}
              priority={index === currentSlide}
              onLoad={() => setIsLoading(false)}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className="absolute top-0 w-full">
        <Header />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-2 shadow-text">
          Your partner in Mongolian
          <br />
          Capital Market
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white mt-4 shadow-text">
          Your way to Wall Street
        </h2>
        <div className="mt-6 flex justify-center">
          <Button label="Find out more" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
