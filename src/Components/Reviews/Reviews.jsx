import React, { useState , useEffect } from "react";
import styles from "./Reviews.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import StylizedHeading from "../StylizedHeading";


const reviews = Array(9).fill({
  name: "JOHN SMITH",
  review:
    "Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.",
});
export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("desktop"); 

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setViewMode("mobile");
    } else if (width > 600 && width <= 1024) {
      setViewMode("tablet");
    } else {
      setViewMode("desktop");
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  const reviewsToShow = viewMode === "mobile" ? 1 : viewMode === "tablet" ? 2 : 3;
  const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsToShow);

  const handleNext = () => {
    if (currentIndex + reviewsToShow < reviews.length) {
      setCurrentIndex(currentIndex + reviewsToShow);
    }
  };

  const handlePrev = () => {
    if (currentIndex - reviewsToShow >= 0) {
      setCurrentIndex(currentIndex - reviewsToShow);
    }
  };


  return (
    <section className={styles.reviewContainer}>
      <StylizedHeading text="Don t just take our word for it.." />
      <h2></h2>
      <div className={styles.arrows}>
        <FaChevronLeft className={styles.arrow} onClick={handlePrev} />
        <FaChevronRight className={styles.arrow} onClick={handleNext} />
      </div>
      <div className={styles.reviewsList}>
        {currentReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.starIcon}>
          <IoStar />
        </div>
        <h2>REVIEW</h2>
      </div>
      <div className={styles.userProfile}>
        <div className={styles.userImage}>
          <img src="https://via.placeholder.com/150" alt="user" />
        </div>
        <div className={styles.userDetails}>
          <h3>{review.name}</h3>
          <p>CUSTOMER, AGENT</p>
        </div>
      </div>
      <p className={styles.review}>
        {review.review}
      </p>
    </div>
  );
};
