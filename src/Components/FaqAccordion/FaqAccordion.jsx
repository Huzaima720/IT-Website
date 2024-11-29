import React, { useState } from "react";
import styles from "./FaqAccordion.module.css";
import StylizedHeading from "../StylizedHeading";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Libero viverra non volutpat pretium placerat platea viverra. Placerat potenti a sit lectus tincidunt venenatis rutrum aliquet tristique. Morbi enim donec id suspendisse aliquam et leo quisque arcu. Sed.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloremque.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Dignissim varius id.",
      answer: "Suspendisse potenti. Proin scelerisque.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Blandit leo et lectus curabitur aliquam.",
      answer: "Quisque id quam ac orci aliquam luctus.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Auctor vel phasellus eget consectetur.",
      answer: "Nulla facilisi. Praesent efficitur varius eros.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Eu nunc eget nunc eget. Habitant quis.",
      answer:
        "Aliquam tincidunt, lorem id tincidunt elementum, est justo viverra dolor.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <StylizedHeading text="FAQs" />
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            <div className={styles.faqIcon}>
              {activeIndex === index ? <FaCircleMinus /> : <FaCirclePlus />}
            </div>

            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
