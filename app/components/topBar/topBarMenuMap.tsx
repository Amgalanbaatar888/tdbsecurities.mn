"use client";
import { topBarMenu } from "../topBar/topBarMenu";
import { usePathname } from "next/navigation";

interface MainmenuProps {
  bgColor: "bg-white" | "bg-[#DFDFDF]";
}

export function Mainmenu({ bgColor }: MainmenuProps) {
  const pathname = usePathname();

  const textColor =
    bgColor === "bg-white" ? "text-[#DFDFDF]" : "text-[#1B2D6B]";

  return (
    <div className="w-[767px] h-10 flex justify-between items-center">
      {topBarMenu.map((item) => (
        <a
          key={item.id}
          className={`px-2 font-semibold ${
            pathname === item.link
              ? "font-semibold font-rubik text-[#007AFF]"
              : textColor
          }`}
          href={item.link}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
