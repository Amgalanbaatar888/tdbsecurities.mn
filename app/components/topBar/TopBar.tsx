"use client";
import { useEffect, useState } from "react";
import { Mainmenu } from "./topBarMenuMap";

type BgColorType = "bg-white" | "bg-[#DFDFDF]";

export default function TopBar() {
  const [bgColor, setBgColor] = useState<BgColorType>("bg-white");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-[#DFDFDF]");
    } else {
      setBgColor("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center w-full h-14 max-sm:hidden sticky top-0 z-10 transition-colors duration-300 ${bgColor}`}
    >
      <div className="mx-auto container flex justify-end items-center">
        <Mainmenu bgColor={bgColor} />
      </div>
    </div>
  );
}
