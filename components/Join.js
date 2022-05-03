import styles from "./join.module.css";

function Join() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Join us on email for</h1>
      <span className={styles.span}>more trending topics</span>
      <button className={styles.button}>Join now</button>
    </div>
  );
}

export default Join;
