import Hero from "../Components/Hero/Hero";
import Brands from "../Components/Brands/Brands";
import Offerings from "../Components/Offerings/Offerings";
import InfoBox from "../Components/InfoBox/InfoBox";
import Statistics from "../Components/Statistics/Statistics";

import Footer from "../Components/Footer/Footer";

import heroImg from '../assets/images/Service Hero Image.jpg'

const HeroContent = {
  title: "Our Services",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae egestas nisi. Nulla facilisi. Donec bibendum, nunc vel sollicitudin tempor, urna nunc varius nunc, non faucibus neque velit vel ipsum.",
  img : heroImg,
};
export default function ServicePage() {
  return (
    <>
      <Hero content={HeroContent} />
      <Brands />
      <Offerings />
      <div className="info-stats">
        <InfoBox button={true}  style={{ backgroundColor: 'white', color: 'black' , margin: '0' }}/>
        <Statistics />
      </div>
      <Footer />
    </>
  );
}
