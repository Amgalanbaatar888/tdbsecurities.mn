import Button from "../Button";
import Logo from "../svg/Logo";
import Menu from "../svg/Menu";
import MobileLogo from "../svg/MobileLogo";
import { HeaderMenuMap } from "./HeaderMenuMap";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <div className="py-5 max-sm:p-5 container mx-auto max-sm:mt-3 ">
        <div className="flex justify-between items-center  w-full h-14 p-4 ">
          <div className="sm:hidden">
            <Menu />
          </div>
          <a className="text-white" href="/">
            <div className="sm:hidden">
              <MobileLogo />
            </div>
            <div className="max-sm:hidden">
              <Logo />
            </div>
          </a>
          <div className="text-white text-xl sm:hidden">
            <IoSearch />
          </div>
          <div className="border bg-inherit text-white w-[55%] h-[56px] menu rounded-2xl	 flex justify-center items-center max-md:hidden">
            <HeaderMenuMap />
          </div>
          <div className="flex gap-3 max-sm:hidden">
            <div className="font-semibold text-base text-white">Нэвтрэх</div>
            <Button label="Данс нээх" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
