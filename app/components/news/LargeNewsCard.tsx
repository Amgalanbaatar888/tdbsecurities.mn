import React from "react";

interface LargeNewsCardProps {
  title: string;
  description: string;
  description2: string;
  imageUrl: string;
}

const LargeNewsCard: React.FC<LargeNewsCardProps> = ({
  title,
  description,
  imageUrl,
  description2,
}) => {
  return (
    <div className="max-w-[476px]">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-[476px] h-[235px] object-cover max-md:w-[288px] max-md:h-[153px]"
      />
      <h1 className=" max-sm:text-base text-black font-semibold max-sm:mt-2 text-3xl my-6">
        {title}
      </h1>
      <h2 className="text-[#476788] text-justify font-light text-sm max-sm:text-xs mt-2 mb-4 max-xl:hidden">
        {description}
      </h2>
      <h2 className="text-[#476788] text-justify font-light text-sm max-sm:text-xs mt-2 max-xl:hidden">
        {description2}
      </h2>
    </div>
  );
};

export default LargeNewsCard;
