import React from "react";
import styles from "./footer.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Data = [
  "Privacy Policy",
  "Terms and Conditions",
  "Contact Us",
  "Careers",
];
class Footer extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.circle}>
            <img
              onClick={this.scrollToTop}
              className={styles.flash}
              alt=""
              src="/flash.png"
            />
          </div>
          <h1 className={styles.h1}>Findtrend</h1>
        </div>
        <div className={styles.content}>
          {Data.map((li) => (
            <ul key={li} className={styles.ul}>
              {li}
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Footer;
