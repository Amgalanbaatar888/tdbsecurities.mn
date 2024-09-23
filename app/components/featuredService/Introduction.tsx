import React from "react";
import { IoMdQuote } from "react-icons/io";

const introductionData = [
  {
    id: 1,
    imageSrc: "/images/Director.png",
    imageAlt: "director",
    name: "Г. Энхбат",
    position:
      "Ти Ди Би Секьюритис ҮЦК ХХК-ийн Гүйцэтгэх захирлын тэргүүн орлогч",
    paragraphs: [
      "Монгол Улсын хөрөнгийн зах зээл 33 жилийн хөгжлийн түүхтэй бөгөөд энэхүү хөгжлийн тэн хагасыг бид эрхэм харилцагч, хөрөнгө оруулагчдынхаа хамтаар бичилцсэн. 2008 онд үүсгэн байгуулагдсан цагаасаа хойш бид анхдагч, шинийг санаачлагч, үндэсний баялаг бүтээгчдийг дэмжигч, харилцагчдын найдвартай зөвлөх байх эрхэм зорилгын хүрээнд харилцагчдын хүсэл зорилгыг эрхэмлэсэн, дэвшилтэт технологид суурилсан цогц бүтээгдэхүүн үйлчилгээ, санхүүгийн шийдлийг мэргэжлийн дээд түвшинд харилцагчдадаа хүргэн ажилласаар байна.",
      "Хөрөнгийн зах зээл боломжоор дүүрэн. Та энэхүү боломж дүүрэн зах зээлийн аялалд гарахад сайн хөтөч хамгийн чухал. Бид таны газрын зураг болж энэхүү аялалд амжилттай гарахад үргэлж хамт байх болно.",
    ],
  },
];

export default function Introduction() {
  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:mb-24  mt-10 lg:mt-20 max-sm:p-11 max-md:bg-[#F5F5F7]">
      <div className="text-4xl absolute text-[#0B3558E3] right-5 top-[-11px] md:hidden ">
        <IoMdQuote />
      </div>

      {introductionData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row gap-8 lg:gap-24 border rounded-3xl lg:p-10 max-w-7xl mx-auto md:p-12 max-md:border-none"
        >
          <div className="w-full lg:w-1/3 flex justify-center items-center max-lg:justify-start max-lg:gap-7">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-2xl max-lg:rounded-full max-md:w-24 max-md:h-24"
            />
            <div className="flex flex-col lg:hidden">
              <h1 className="text-[#0B3558] text-2xl lg:text-3xl font-semibold mt-5 max-sm:text-xl">
                {item.name}
              </h1>
              <h2 className="text-sm font-light mt-4 max-sm:text-xs">
                {item.position}
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="text-justify text-sm text-[#476788] font-light flex flex-col gap-5 max-sm:text-xs">
              {item.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <h1 className="text-[#0B3558] text-2xl lg:text-3xl font-semibold mt-5 max-lg:hidden">
              {item.name}
            </h1>
            <h2 className="text-sm font-light mt-4 max-lg:hidden max-sm:text-justify  ">
              {item.position}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
