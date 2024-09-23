import React from "react";

interface FooterButtonProps {
  label: string;
  onClick: () => void;
}

const FooterButton: React.FC<FooterButtonProps> = ({ label, onClick }) => {
  return (
    <div
      className="w-[140px] max-sm:text-xs max-sm:h-10 max-sm:w-23 h-[55px] text-white rounded-[56px] bg-[#2986FE] flex items-center justify-center  text-lg	 font-semibold cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default FooterButton;
