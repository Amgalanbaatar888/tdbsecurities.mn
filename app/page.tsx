import DiscriminateService from "./components/discriminateService/DiscriminateService";
import Header from "./components/header/Header";
import HeroSlider from "./components/hero/HeroSlider";
import LogoThicker from "./components/logoThicker/LogoThicker";
import TopBar from "./components/topBar/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <HeroSlider />
      <LogoThicker />
      <DiscriminateService />
    </>
  );
}
