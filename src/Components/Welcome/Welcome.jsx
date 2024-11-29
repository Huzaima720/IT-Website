import React from "react";
import styles from "./Welcome.module.css";

import StylizedHeading from "../StylizedHeading";

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <StylizedHeading text="Welcome" />
      <p>
        background or why we start a company ...Lorem ipsum dolor sit amet
        consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh
        proin neque. Sed neque cursus congue ultrices enim donec in. Diam
        pretium odio tortor amet amet molestie enim aliquam massa vitae.Lorem
        ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit
        cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices
        enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam
        massa vitae.
      </p>
    </section>
  );
}
