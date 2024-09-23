"use client";
import FooterButton from "../button/FooterButton";

export default function RegisterAnEmail() {
  return (
    <div className="container mx-auto flex justify-center p-12 max-sm:py-5 max-sm:px-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#2986FE] text-5xl max-sm:text-xl font-medium mt-5 max-sm:mt-2">
          И-Мэйл хаяг бүртгүүлэх үү?
        </h1>
        <div className="flex w-full gap-3 mt-11">
          <input
            type="text"
            id="first_name"
            className="bg-white shadow-md   max-sm:p-5 border max-sm:text-[10px] border-gray-200 text-[#476788] font-normal max-sm:h-8	 text-lg rounded-[50px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Мэйл хаягаа оруулна уу..."
            required
          />
          <FooterButton label="Sign up" onClick={() => {}} />
        </div>
        <div className="flex gap-24 mt-11 max-md:flex max-md:flex-col max-md:gap-4 max-md:mt-6 max-sm:mr-20">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#D9D9D9] rounded-md"></div>
            <p className="text-lg text-[#476788] font-normal max-sm:text-xs">
              7 хоногийн тойм
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#D9D9D9]  rounded-md"></div>
            <p className="text-lg text-[#476788] font-normal max-sm:text-xs">
              Хөрөнгө оруулалтын боломж
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
