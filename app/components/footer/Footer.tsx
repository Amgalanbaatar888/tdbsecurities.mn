import { CombinedFooterMenu } from "./CombinedFooterMenu";
import CopyrightFooter from "./CopyrightFooter";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border border-t-[#D9D9D9] h-full border-b-2">
      <div className="container mx-auto">
        <CombinedFooterMenu />
      </div>
      <CopyrightFooter />
    </footer>
  );
}
