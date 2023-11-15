import styles from "./content1.module.css";

function Content1({ id }) {
  return (
    <div className={styles.container} id={id}>
      <h1 className={styles.h1}>Open new tabs is sh*t </h1>
      <div className={styles.card}>
        <div className={styles.insideCard}>
          <p className={styles.p}>Findtrend - Elon Musk</p>
        </div>
      </div>
      <h3 className={styles.h3}>
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </h3>
    </div>
  );
}

export default Content1;
