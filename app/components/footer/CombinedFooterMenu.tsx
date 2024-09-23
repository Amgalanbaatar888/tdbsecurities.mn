"use client";

import { usePathname } from "next/navigation";
import { ReadyToTradeSection } from "./ReadyToTradeSection";

const productItems = [
  {
    id: 1,
    title: "Product",
    items: [
      { id: 2, label: "Features", link: "/service" },
      { id: 3, label: "Pricing", link: "/contact" },
      { id: 4, label: "Case studies", link: "/help" },
      { id: 5, label: "Reviews", link: "/contact" },
      { id: 6, label: "Updates", link: "/help" },
    ],
  },
];

const companyItems = [
  {
    id: 2,
    title: "Company",
    items: [
      { id: 2, label: "About", link: "/service" },
      { id: 3, label: "Contact us", link: "/contact" },
      { id: 4, label: "Careers", link: "/help" },
      { id: 5, label: "Culture", link: "/help" },
      { id: 6, label: "Blog", link: "/help" },
    ],
  },
];

const supportItems = [
  {
    id: 3,
    title: "Support",
    items: [
      { id: 2, label: "Getting started", link: "/service" },
      { id: 3, label: "Help center", link: "/contact" },
      { id: 4, label: "Server status", link: "/help" },
      { id: 5, label: "Report a bug", link: "/help" },
      { id: 6, label: "Chat support", link: "/help" },
    ],
  },
];

const combinedItems = [...productItems, ...companyItems, ...supportItems];

export function CombinedFooterMenu() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 xl:gap-[340px] px-10 justify-between pt-16 max-md:px-10 ">
      <div className="lg:hidden w-full mb-10">
        <ReadyToTradeSection />
      </div>
      <div className="flex justify-between max-sm:flex-col lg:justify-start lg:gap-12  xl:gap-16 ">
        {combinedItems.map((section) => (
          <div
            className="flex flex-col gap-4 max-sm:gap-2 mb-8 lg:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-auto max-lg:items-center max-sm:items-start"
            key={section.id}
          >
            <h1 className="text-[#0B3558] font-bold text-lg max-sm:text-sm lg:text-xl">
              {section.title}
            </h1>
            {section.items.map((item) => (
              <a
                key={item.id}
                className={`font-normal max-sm:text-[12px] text-base lg:text-lg text-[#48637A] ${
                  pathname === item.link ? "text-black" : ""
                }`}
                href={item.link}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden lg:block lg:max-w-[359px]">
        <ReadyToTradeSection />
      </div>
    </div>
  );
}
