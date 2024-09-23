import React from "react";
import AcmeCrop from "../svg/logoThicker/AcmeCrop";
import Apex from "../svg/logoThicker/Apex";
import Celestial from "../svg/logoThicker/Celestial";
import Echo from "../svg/logoThicker/Echo";
import Pulse from "../svg/logoThicker/Pulse";
import Quantum from "../svg/logoThicker/Quantum";
import HeroImagecloud from "../svg/HeroImagecloud";

const LogoScroll: React.FC = () => {
  const logos = [AcmeCrop, Quantum, Echo, Celestial, Pulse, Apex];

  return (
    <div className="relative overflow-hidden mx-auto w-full max-w-[1200px] max-sm:h-32 px-10 pt-10">
      <div className="flex animate-scroll space-x-10">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-10 items-center">
            {logos.map((Logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48"
              >
                <Logo />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between absolute left-0 right-0 bottom-32 max-sm:bottom-0">
        <div className="max-sm:w-5">
          <HeroImagecloud />
        </div>
        <div className="max-sm:w-5">
          <HeroImagecloud />
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;
