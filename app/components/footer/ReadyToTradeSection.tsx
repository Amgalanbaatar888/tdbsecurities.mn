import FooterButton from "../button/FooterButton";

export function ReadyToTradeSection() {
  return (
    <div className="w-full max-xl:text-center">
      <h1 className="text-lg lg:text-xl font-bold text-[#0B3558] ">
        Ready to Trade
      </h1>
      <p className="text-[#476788] font-normal text-sm max-sm:text-[12px] lg:text-base mt-2">
        Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris
        sed ma
      </p>
      <div className="flex flex-col w-full gap-5 mt-6">
        <input
          type="text"
          id="first_name"
          className="bg-white shadow-md max-w-[480px] max-lg:mx-auto p-4 lg:p-6 border text-sm lg:text-base border-gray-200 text-[#476788] font-normal rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full h-12 lg:h-[68px]"
          placeholder="Enter your email"
          required
        />
        <div className="max-xl:mx-auto">
          <FooterButton label="Subscribe" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
