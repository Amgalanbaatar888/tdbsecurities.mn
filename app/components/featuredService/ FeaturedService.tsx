import Introduction from "./Introduction";
import ServiceCardList from "./ServiceCardList";

export default function FeaturedService() {
  return (
    <div>
      <h1 className="text-5xl max-sm:text-xl	font-medium	text-[#1B2D6B] flex justify-center">
        Онцлох үйлчилгээ
      </h1>
      <ServiceCardList />
      <Introduction />
    </div>
  );
}
