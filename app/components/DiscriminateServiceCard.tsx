import React from "react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Үнэт цаасны зуучлалын үйлчилгээ",
    description:
      "Монголын хөрөнгийн биржийн арилжааны системтэй шууд холбогдсон электрон арилжааны системийг ашиглан үнэт цаасны арилжаанд хамгийн түргэн шуурхай, цаг хугацааны хоцрогдолгүйгээр оролцох, үнэт цаасны дансаа удирдах боломжтой.",
    imageUrl: "images/Slide1.png",
  },
  {
    title: "Үнэт цаасны зуучлалын үйлчилгээ",
    description:
      "Монголын хөрөнгийн биржийн арилжааны системтэй шууд холбогдсон электрон арилжааны системийг ашиглан үнэт цаасны арилжаанд хамгийн түргэн шуурхай, цаг хугацааны хоцрогдолгүйгээр оролцох, үнэт цаасны дансаа удирдах боломжтой.",
    imageUrl: "images/Slide1.png",
  },
  {
    title: "Үнэт цаасны зуучлалын үйлчилгээ",
    description:
      "Монголын хөрөнгийн биржийн арилжааны системтэй шууд холбогдсон электрон арилжааны системийг ашиглан үнэт цаасны арилжаанд хамгийн түргэн шуурхай, цаг хугацааны хоцрогдолгүйгээр оролцох, үнэт цаасны дансаа удирдах боломжтой.",
    imageUrl: "images/Slide1.png",
  },
];

interface DiscriminateServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const DiscriminateServiceCard: React.FC<DiscriminateServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-96 h-[400px] max-sm:w-72 max-sm:h-72 border rounded-[50px] bg-white shadow-lg p-5 transition-transform transform hover:scale-105">
      <div className="w-24 h-24 max-sm:w-[71px] max-sm:h-[71px] border rounded-full bg-[#E7ECFF] flex justify-center items-center mx-auto mt-7 max-sm:mt-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <h1 className="text-center text-2xl max-sm:text-base text-[#0B3558] mt-5 max-sm:mt-2 font-medium">
        {title}
      </h1>
      <h2 className="text-[#476788] text-justify font-light text-sm max-sm:text-xs  mt-2">
        {description}
      </h2>
    </div>
  );
};

const ServiceCardList = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center mt-16 max-sm:mt-8 space-x-0 space-y-4 md:space-x-4 md:space-y-0">
      {services.map((service, index) => (
        <div className="flex-shrink-0" key={index}>
          <DiscriminateServiceCard
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceCardList;
