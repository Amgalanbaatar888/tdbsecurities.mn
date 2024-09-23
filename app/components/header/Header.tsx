import Button from "../button/Button";
import Logo from "../svg/Logo";
import MobileLogo from "../svg/MobileLogo";
import { IoSearch } from "react-icons/io5";
import { Navbar } from "./Navbar";
import MobileHeader from "../header/mobileHeader/index";
import { useRouter } from "next/navigation";
import { create } from "domain";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };
  const createAccount = () => {
    router.push("/register");
  };
  return (
    <div>
      <div className="py-5 max-sm:p-5 container mx-auto max-sm:mt-3 ">
        <div className="flex justify-between  items-center w-full h-14 p-4 ">
          <div className="sm:hidden">
            <MobileHeader />
          </div>
          <a className="text-white" href="/">
            <div className="sm:hidden">
              <MobileLogo />
            </div>
            <div className="max-sm:hidden">
              <Logo />
            </div>
          </a>
          <div className="text-white w-[50px] h-[50px] text-xl flex justify-center items-center sm:hidden">
            <IoSearch />
          </div>
          <div className="bg-[#00000033] backdrop-blur-xl text-white w-[55%] h-[56px] menu rounded-2xl	 flex justify-center items-center max-md:hidden">
            <Navbar />
          </div>
          <div className="flex gap-3 max-sm:hidden">
            <div
              onClick={handleClick}
              className="font-semibold text-base text-white cursor-pointer"
            >
              Нэвтрэх
            </div>
            <Button label="Данс нээх" onClick={createAccount} />
          </div>
        </div>
      </div>
    </div>
  );
}
