import React from "react";
import styles from "./Testimonials.module.css";
import StylizedHeading from "../StylizedHeading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const testimonialsData = [
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra. Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.",
  },
  //   {
  //     name: "Jane Smith",
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula ac neque euismod dictum. Sed ultricies facilisis ex, non volutpat arcu vulputate et.",
  //   },
];
export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <StylizedHeading text="Testimonials" />
      <div className={styles.testimonialsContainer}>
        <FaChevronLeft className={styles.Arrow} />
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} testimonial={testimonial} />
        ))}
        <FaChevronRight className={styles.Arrow} />
      </div>
    </section>
  );
}

const Card = ({ testimonial }) => {
  return (
    <div className={styles.card}>
      <div className={styles.profle}>
        <div className={styles.image}>
          <img
            src="https://via.placeholder.com/200x200"
            alt="Testimonial Image"
          />
        </div>
        <h3>{testimonial.name}</h3>
      </div>
      <p className={styles.review}>
        {testimonial.review}
      </p>
    </div>
  );
};
