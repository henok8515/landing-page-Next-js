import styles from "./header.module.css";
let Tittle = ["About", "How it works", "price", "Solution", "Feature"];
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.icon} />
        <h1 className={styles.h1}>Findtrend</h1>
      </div>
      <div className={styles.list}>
        {Tittle.map((li) => (
          <div>
            <ul className={styles.li}>{li}</ul>
          </div>
        ))}
      </div>
      <div className={styles.navs}>
        <ul className={styles.li}>Login</ul>
        <button className={styles.button1}>Register</button>
        <div key={Tittle.length++} className={styles.spanContainer}>
          <span className={styles.span} />
          <span className={styles.span} />
          <span className={styles.span} />
        </div>
      </div>
    </div>
  );
}

export default Header;
