import Hero from "../Components/Hero/Hero";
import Brands from "../Components/Brands/Brands";
import ServiceDesc from "../Components/ServiceDesc/ServiceDesc";

import Process from "../Components/Process/Process";
import InfoBox from "../Components/InfoBox/InfoBox";

import Testimonials from "../Components/Testimonials/Testimonials";
import FaqAccordion from "../Components/FaqAccordion/FaqAccordion";
import Footer from "../Components/Footer/Footer";

import heroImg from "../assets/images/Service Hero Image.jpg";

const processItems = Array(4)
  .fill(null)
  .map(() => ({
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.",
  }));

export default function WebDev() {
  const HeroContent = {
    title: "WEB DEVELOPMENT",
    description:
      "Delivering cutting-edge digital solutions tailored to your business needs",
    img: heroImg,
  };
  return (
    <>
      <Hero content={HeroContent} />
      <Brands />
      <ServiceDesc />
      <Process
        title="Our Process"
        subtitle="Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet"
        button={true}
        items={processItems}
      />
      <Testimonials />
      <FaqAccordion />
      <Footer />
    </>
  );
}
