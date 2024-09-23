import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement<IconType>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="hover:text-blue-600 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

const CopyrightFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 xl:py-8 max-sm:pb-8">
      <hr className="border-t border-gray-300 mb-8" />
      <footer className="flex flex-col xl:flex-row items-center xl:justify-between gap-6">
        <div className="flex gap-4 text-[#476788] text-xl sm:text-2xl order-1 xl:order-2">
          <SocialLink
            href="https://www.facebook.com/tdbsecurities"
            icon={<RiFacebookFill />}
          />
          <SocialLink
            href="https://x.com/TDB_Securities"
            icon={<FaTwitter />}
          />
          <SocialLink
            href="https://www.instagram.com/tdb_securities/"
            icon={<RiInstagramFill />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/tdb-securities-sc-b6449b256/"
            icon={<RiLinkedinFill />}
          />
          <SocialLink
            href="https://www.youtube.com/@tdbsecuritiessc6358"
            icon={<FaYoutube />}
          />
        </div>
        <p className="text-sm sm:text-base text-[#476788] text-center xl:text-left order-2 xl:order-1">
          © {currentYear} TDB Securities SC LLC | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default CopyrightFooter;
