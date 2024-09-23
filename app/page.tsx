import DiscriminateService from "./components/featuredService/ FeaturedService";
import HeroSlider from "./components/HeroSlider";
import NewInformation from "./components/news/NewInformation";
import LogoThicker from "./components/logoThicker/LogoThicker";
import TopBar from "./components/topBar/TopBar";
import Highlights from "./components/news/Highlights";
import Banner from "./components/Banner";
import RegisterAnEmail from "./components/footer/RegisterAnEmail";
import FooterTopBar from "./components/footer/FooterTopBar";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <HeroSlider />
      <LogoThicker />
      <DiscriminateService />
      <NewInformation />
      <Highlights />
      <Banner />
      <RegisterAnEmail />
      <FooterTopBar />
      <Footer />
    </>
  );
}
