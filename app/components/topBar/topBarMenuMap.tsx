"use client";
import { topBarMenu } from "../topBar/topBarMenu";
import { usePathname } from "next/navigation";

export function Mainmenu() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-[767px] h-10 flex justify-between items-center">
        {topBarMenu.map((item) => (
          <a
            key={item.id}
            className={`px-2  ${
              pathname === item.link
                ? "text-[#007AFF] text-base font-semibold font-rubik"
                : "text-[#DFDFDF] text-base font-semibold font-rubik"
            }`}
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
