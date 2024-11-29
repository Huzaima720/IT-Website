import Hero from "../Components/Hero/Hero";
import Brands from "../Components/Brands/Brands";
import FeatureShowcase from "../Components/FeatureShowcase/FeatureShowcase";
import InfoBox from "../Components/InfoBox/InfoBox";
import FeaturesOverview from "../Components/FeaturesOverview/FeaturesOverview";
import Achievements from "../Components/Achievements/Achievements";
import Reviews from "../Components/Reviews/Reviews";
import Footer from "../Components/Footer/Footer";

import heroImg from "../assets/images/Rectangle 39.png";

const HeroContent = {
  title: "Empowering Your Business with IT Innovation",

  description:
    "We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.",
  img: heroImg,
};

export default function HomePage() {
  return (
    <>
      <Hero content={HeroContent} />
      <Brands />
      <FeatureShowcase />
      <InfoBox />
      <FeaturesOverview />
      <InfoBox button={true} />
      <Achievements />
      <Reviews />
      <InfoBox button={true} />
      <Footer />
    </>
  );
}
