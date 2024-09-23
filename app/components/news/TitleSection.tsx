import React from "react";
import { MdNavigateNext } from "react-icons/md";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
  onClick?: () => void;
  latest: string;
  mostRead: string;
}

const TitleSection: React.FC<HeaderProps> = ({
  title,
  onClick,
  latest,
  mostRead,
}) => {
  return (
    <header className="bg-[#F5F5F7] max-md:bg-white max-md:mt-10 ">
      <div className="container mx-auto py-20 px-6 max-sm:px-[40px] flex justify-between max-lg:flex max-lg:flex-col max-sm:py-0 ">
        <div className="flex justify-between">
          <h1 className="text-5xl text-[#1B2D6B] font-medium font-rubik max-sm:text-xl">
            {title}
          </h1>
          <div
            onClick={onClick}
            className="flex items-center text-2xl text-[#1B2D6B] lg:hidden cursor-pointer"
          >
            <MdNavigateNext />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-[#476788]  text-xl w-100% flex gap-5 justify-end max-lg:hidden">
            <a href="">{latest}</a>
            <a href="">{mostRead}</a>
          </div>
          <hr className="border-gray-500 lg:w-[800px]"></hr>
        </div>
      </div>
    </header>
  );
};

export default TitleSection;
