"use client";
import { usePathname } from "next/navigation";
import { headerMenu } from "./headerMenu";
import { IoSearch } from "react-icons/io5";

export function HeaderMenuMap() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center">
        {headerMenu.map((item) => (
          <a
            key={item.id}
            className={`px-2  ${
              pathname === item.link
                ? "relative font-semibold text-base	text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#007AFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#007AFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                : "relative font-semibold text-base	text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#007AFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#007AFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            }`}
            href={item.link}
          >
            {item.label}
          </a>
        ))}
        <div className="text-xl font-semibold cursor-pointer">
          <IoSearch />
        </div>
      </div>
    </>
  );
}
