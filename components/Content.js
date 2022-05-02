import React from "react";
import styles from "./content.module.css";
function Content() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        Minimize your tabs.<span>Find the trends!</span>{" "}
      </h1>
      <p className={styles.p}>
        Don’t let your computer memories consumes all of those browser tabs.
        Findtrend let you gathers all of your favorite website into one place.
      </p>
      <button className={styles.button}>Get Started 🔥</button>
      <div className={styles.boxContainer}>
        <div className={styles.a}>Cryptopunk - Search</div>
        <div className={styles.b}>Popular Design - Search</div>
        <div className={styles.c}>Product Design - Search </div>
        <div className={styles.d}>Elon Musk - Search</div>
      </div>
    </div>
  );
}

export default Content;
