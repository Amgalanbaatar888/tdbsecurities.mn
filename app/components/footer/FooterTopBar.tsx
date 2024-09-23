import GreenLogo from "../svg/GreenLogo";

export default function FooterTopBar() {
  return (
    <div className="bg-[#F5F5F7]">
      <div className="flex justify-between container mx-auto px-10 py-20 max-lg:px-10 max-lg:py-2 max-xl:hidden">
        <div className="flex items-center">
          <GreenLogo />
        </div>

        <p className="text-lg	font-normal text-[#476788]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  );
}
