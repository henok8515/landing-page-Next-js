import React from "react";
import styles from "./content.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Content extends React.Component {
  render() {
    return (
      <nav id="navbar" className={styles.container}>
        <h1 className={styles.h1}>
          Minimize your tabs.<span>Find the trends!</span>{" "}
        </h1>
        <p className={styles.p}>
          Don’t let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className={styles.button}>Get Started 🔥</button>
        </Link>
        <div className={styles.boxContainer}>
          <div className={styles.a}>Cryptopunk - Search</div>
          <div className={styles.b}>Popular Design - Search</div>
          <div className={styles.c}>Product Design - Search </div>
          <div className={styles.d}>Elon Musk - Search</div>
        </div>
      </nav>
    );
  }
}
