import { HeaderMenuMap } from "./HeaderMenuMap";

export default function Header() {
  return (
    <div className="bg-slate-300 border py-5 container mx-auto">
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            src="/images/TdbLogo.png"
            alt="logo"
            className="w-30 h-30 cursor-pointer"
          />
        </a>
        <div className="border bg-black text-white w-[689px] h-[56px] rounded-md flex justify-center items-center ">
          <HeaderMenuMap />
        </div>
        <div className="flex gap-3">
          <div className="font-semibold text-base text-white">Нэвтрэх</div>
          <div className="w-[106px] h-[28px] text-white rounded-[45px] bg-[#2986FE] flex items-center justify-center px-3 py-2 text-xs font-semibold">
            Данс нээх
          </div>
        </div>
      </div>
    </div>
  );
}
