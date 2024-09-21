import AcmeCrop from "../svg/logoThicker/AcmeCrop";
import Apex from "../svg/logoThicker/Apex";
import Celestial from "../svg/logoThicker/Celestial";
import Echo from "../svg/logoThicker/Echo";
import Pulse from "../svg/logoThicker/Pulse";
import Quantum from "../svg/logoThicker/Quantum";

export default function LogoThicker() {
  return (
    <div className="max-w-[1200px] h-32 flex justify-between container mx-auto p-10 items-center ">
      <AcmeCrop />
      <Quantum />
      <Echo />
      <Celestial />
      <Pulse />
      <Apex />
    </div>
  );
}
