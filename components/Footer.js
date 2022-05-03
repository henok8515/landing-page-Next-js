import styles from "./footer.module.css";
const Data = [
  "Privacy Policy",
  "Terms and Conditions",
  "Contact Us",
  "Careers",
];
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.circle} />
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

export default Footer;
