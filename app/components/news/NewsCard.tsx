import React from "react";

interface NewsCardProps {
  title: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="max-w-[475px] h-[230px]">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg h-[150px] w-[400px] object-cover max-xl:w-[475px] max-xl:h-[235px] max-md:w-[288px] max-md:h-[153px]"
      />
      <h1 className="max-sm:text-base text-black text-xl font-semibold max-sm:mt-2 mt-6">
        {title}
      </h1>
    </div>
  );
};

export default NewsCard;
