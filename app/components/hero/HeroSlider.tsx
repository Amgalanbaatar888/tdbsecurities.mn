"use client";

import React, { useEffect, useState } from "react";
import Header from "../header/Header";

interface Slide {
  id: number;
  image: string;
  caption: string;
}

const slides: Slide[] = [
  { id: 1, image: "/images/Slide1.png", caption: "Slide 1" },
  { id: 2, image: "/images/Slide1.png", caption: "Slide 2" },
  { id: 3, image: "/images/Slide1.png", caption: "Slide 3" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {slide.caption}
            </div>
            <div className="absolute top-5 left-5  "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
