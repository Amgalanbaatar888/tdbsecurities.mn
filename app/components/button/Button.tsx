import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div
      className="w-[106px] h-[28px] text-white rounded-[45px] bg-[#2986FE] flex items-center justify-center  text-xs font-semibold cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
