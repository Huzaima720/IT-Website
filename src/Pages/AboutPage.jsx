import Hero from "../Components/Hero/Hero";
import Brands from "../Components/Brands/Brands";
import Welcome from "../Components/Welcome/Welcome";
import Process from "../Components/Process/Process";
import Mission from "../Components/Mission/Mission";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";

import heroImg from "../assets/images/AboutHeroImage.jpg";
import Team from "../Components/Team/Team";

import styles from "../Components/FeaturesOverview/FeaturesOverview.module.css";

const processItems = Array(3)
  .fill(null)
  .map(() => ({
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.",
  }));

export default function AboutPage() {
  const HeroContent = {
    title: "OUR STORY",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo id bibendum aliquam eget.",
    img: heroImg,
  };
  return (
    <>
      <Hero content={HeroContent} />
      <Brands />
      <Welcome />
      <Team />
      <section className={styles.featuresOverview}>
        <Mission title="Our Mission" />
        <Mission title="Our Goals" reverse={true} />
      </section>
      <Process title="Why You Chose Us" items={processItems} />
      <Testimonials />
      <Footer />
    </>
  );
}
