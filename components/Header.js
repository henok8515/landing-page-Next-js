import styles from "./header.module.css";
let Tittle = [
  {
    id: 1,
    name: "About",
  },
  { id: 2, name: "How it works" },
  { id: 3, name: "price" },
  { id: 4, name: "Solution" },
  { id: 5, name: "Feature" },
  ,
];
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.icon}>
          <img className={styles.flash} alt="" src="/thunder.png" />
        </div>
        <h1 className={styles.h1}>Findtrend</h1>
      </div>
      <div className={styles.list}>
        {Tittle.map((li) => (
          <div key={li.id}>
            <ul className={styles.li}>{li.name}</ul>
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
