import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-24 relative">
      <div className="top-0 left-0 transition-opacity">
        <Image
          src="/images/banner.jpg"
          alt="banner"
          layout="responsive"
          width={1920}
          height={1080}
          className="object-fill"
        />
      </div>
      <div className="absolute top-[380px] left-[380px] max-sm:top-[74px] max-sm:left-9">
        <a
          href="https://play.google.com/store/apps/details?id=mn.tdb.pay&hl=en"
          className="relative w-32 h-5 border rounded-3xl bg-white text-[#2986FE] font-semibold text-center p-5 flex items-center max-sm:w-[93px] max-sm:h-[19px] max-sm:text-xs max-sm:p-3"
        >
          АПП татах
        </a>
      </div>
    </div>
  );
}
