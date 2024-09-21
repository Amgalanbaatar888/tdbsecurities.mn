import DiscriminateServiceCard from "../DiscriminateServiceCard";
import Introduction from "../Introduction";

export default function DiscriminateService() {
  return (
    <div>
      <h1 className="text-5xl max-sm:text-xl	font-medium	text-[#1B2D6B] flex justify-center">
        Онцлох үйлчилгээ
      </h1>
      <DiscriminateServiceCard />
      <Introduction />
    </div>
  );
}
