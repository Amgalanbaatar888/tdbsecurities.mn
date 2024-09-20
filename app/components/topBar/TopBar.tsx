import { Mainmenu } from "./topBarMenuMap";

export default function TopBar() {
  return (
    <div className="border w-full h-14 max-sm:hidden">
      <div className="mx-auto container flex justify-end items-center">
        <Mainmenu />
      </div>
    </div>
  );
}
